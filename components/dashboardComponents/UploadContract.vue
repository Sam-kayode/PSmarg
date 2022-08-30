<template>
  <div class="text-center upload-container">
    <h1 v-if="show" class="upload">Upload Contract</h1>
    <p class="kindly">
      Kindly upload your contract or use <a> contract sample</a>
    </p>
    <div class="drag-container" @dragover.prevent @drop.prevent>
      <input
        ref="fileInput"
        class="fileInput"
        type="file"
        multiple
        @change="uploadFile"
      />
      <div
        class="mx-auto dash-border d-flex flex-column"
        :class="isDash ? 'dashed' : 'undashed'"
        @drop="dragFile"
      >
        <p v-if="showBrowse" class="drag text-center mb-0">
          <span class="d-none d-lg-inline-block"
            >Drag and drop file here or</span
          >
          <span
            v-if="showBrowse"
            class="browse"
            @click="$refs.fileInput.click()"
          >
            Browse</span
          >
        </p>
        <p v-if="showBrowse" class="supported text-center">
          Supported format : pdf, doc or docx
        </p>
        <div v-if="files.length">
          <div class="files">
            <div v-for="(file, index) in files" :key="index" class="file">
              <p>
                {{ file.name }}
                <span v-if="!feedback" class="ml-1 indicate"><Spinner /></span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <p class="error">{{ uploadError }}</p>
    </div>

    <b-modal
      id="modal-10"
      title="tenth Modal"
      centered
      no-stacking
      hide-footer
      hide-header
    >
      <CreateSuccess :modal-id="'modal-10'" />
    </b-modal>
    <div v-if="show" class="d-flex justify-content-center mt-3 mb-5">
      <BlueButton
        class="previous pr-1"
        :outlined="true"
        :button-content="'Previous'"
        @click.native=";[nextForm('BasicInfo'), $emit('nextView', 1)]"
      />
      <BlueButton
        v-if="uploaded"
        class="next pl-1"
        :button-content="'Continue'"
        @click.native=";[nextForm('PaymentMethod')]"
      />
      <BlueButton
        v-else
        class="next"
        :button-content="'Create Contract'"
        :loading="loading"
        @click.native="createContract"
      />
    </div>

    <b-toast id="upload-toast" variant="success" solid>
      {{ feedback }}
    </b-toast>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CreateSuccess from '@/components/dashboardComponents/Modals/CreateSuccess.vue'
export default Vue.extend({
  name: 'UploadContract',
  components: { CreateSuccess },
  props: {
    show: {
      default: true,
      type: Boolean,
    },
  },
  data() {
    return {
      files: [],
      isDash: false as boolean,
      showBrowse: true as boolean,
      feedback: '',
      error: '',
      uploadError: '',
      uploaded: false,
      loading: false,
      res: false,
    }
  },
  methods: {
    nextForm(value: string) {
      if (this.files[0]) {
        if (value !== 'BasicInfo') {
          this.$emit('nextForm', value)
          this.$emit('nextView', 3)
        } else if (value === 'BasicInfo') {
          this.$emit('nextForm', value)
          this.$emit('nextView', 1)
        }
      } else {
        if (value === 'BasicInfo') {
          this.$emit('nextForm', value)
          this.$emit('nextView', 1)
        }
        this.uploadError = 'Kindly upload the necessary documents'
        setTimeout(() => {
          this.uploadError = ''
        }, 4000)
      }
    },
    async uploadFile(e: any) {
      this.isDash = true
      this.files = e.target.files
      if (this.files) {
        this.showBrowse = false
      }

      /* create a reader */
      const readData = (f: any) =>
        new Promise((resolve) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result)
          reader.readAsDataURL(f)
        })

      /* Read data */
      const data = await readData(this.files[0])

      /* upload the converted data */
      const instance = await this.$cloudinary.upload(data, {
        uploadPreset: 'lqcpluti',
        folder: 'contracts',
      })
      const res = await instance
      console.log(res)
      if (res) {
        this.res = true
        this.feedback = 'Uploaded successfully'
        this.$bvToast.show('upload-toast')
        const data = {
          agreement: {
            file: res.secure_url,
          },
        }
        try {
          this.$store.commit('contract/setContract', data)
        } catch (error: any) {
          if (error) {
            const err = error.response.data.message
            this.error = err
          }
        }
      }
    },
    dragFile(e: any) {
      this.isDash = true
      this.files = e.dataTransfer.files
    },
    async createContract() {
      this.loading = true
      if (this.res) {
        try {
          await this.$store.dispatch(
            'contract/createContract',
            this.$store.state.contract.contractDetails
          )
          console.log(this.$store.state.contract.contractDetails)
        } catch (error: any) {
          if (error) {
            const err = error.response.data.message
            this.error = err
          }
        }

        try {
          await this.$store.dispatch('contract/getContracts', 1)
        } catch (error: any) {
          if (error) {
            const err = error.response.data.message
            this.error = err
          }
        }

        if (!this.error) {
          this.uploaded = true
          this.$bvModal.show('modal-10')
          this.loading = false
        }
      } else {
        this.uploadError = 'Kindly upload the necessary documents'
        setTimeout(() => {
          this.uploadError = ''
        }, 4000)
        this.loading = false
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.upload-container {
  .upload {
    font-family: Visuelt Pro, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: center;
    color: $dark-text;
  }

  .kindly {
    font-family: Sofia Pro, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(4, 4, 3, 0.7);

    a {
      color: $primary-color;
      text-decoration: underline;
    }
  }

  .drag {
    font-family: Sofia Pro, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
    color: $dark-text;
    margin-top: 14%;
  }

  .supported {
    font-family: Sofia Pro, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 22px;
    color: rgba(4, 4, 3, 0.7);
  }
  .previous,
  .next {
    width: 180px;
  }

  .create {
    max-width: 355px;
  }

  .drag-container {
    margin: 47px 0 77px 0;
    position: relative;
    padding: 4px 5px;
  }

  .dash-border {
    position: relative;
  }

  .fileInput {
    display: none;
  }

  .undashed {
    border: 0.5px dashed #e0e0e0;
    box-sizing: border-box;
    border-radius: 7px;
    max-width: 646px;
    height: 190px;
  }
  .dashed {
    background: #f9f8ff;
    border: 0.5px dashed $primary-color;
    box-sizing: border-box;
    border-radius: 7px;
    max-width: 646px;
    height: 190px;
  }
}
.files {
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;
  width: 100%;
  position: absolute;
  padding: 10px;
}

.file {
  padding: 10px 10px;
  overflow: hidden !important;
  background: $primary-color;
  border-radius: 23px;
  color: $light;
  margin: 0 5px 5px 10px;
  font-family: Sofia Pro, sans-serif;
  font-size: 75%;
  line-height: 14px;
  height: 40px;
  max-width: 300px;
  p {
    width: 90% !important;
    height: 90%;
    overflow-x: clip !important;
  }

  .indicate {
    font-size: 20px;
  }
}
.browse {
  font-weight: 500;
  color: $primary-color;
  text-decoration: underline;
  cursor: pointer;
  font-family: Sofia Pro, sans-serif;
}

.error {
  font-family: Sofia Pro, sans-serif;
  color: red;
  height: 10px;
  font-size: 16px;
}

@include lg-tablet {
  .drag-container {
    margin: 0 !important;
  }
}
</style>

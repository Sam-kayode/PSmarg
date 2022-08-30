<template>
  <div class="pad">
    <div class="sign-pad">
      <VueSignaturePad
        ref="signaturePad"
        width="250px"
        height="100px"
        class="white"
      />
      <div v-show="loading" class="spinner"><spinner /></div>
    </div>
    <div class="prompt">
      <p :class="variant" class="mb-0 p-0">{{ feedback }}</p>
    </div>
    <div class="buttons mt-4">
      <LightButton :button-content="'Save'" class="mr-4" @click.native="save" />
      <LightButton :button-content="'Undo'" @click.native="undo" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UploadSignature',
  data() {
    return {
      file: '',
      feedback: '',
      loading: false,
      variant: '',
    }
  },
  computed: {},
  watch: {
    feedback() {
      setTimeout(() => {
        this.feedback = ''
          this.$emit('closeModal')

      }, 1000)
    },
  },
  methods: {
    undo() {
      this.$refs.signaturePad.undoSignature()
    },
    save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature()
      if (isEmpty) {
        this.feedback = 'Signature field is empty'
        this.variant = 'danger'
      } else {
        this.loading = true
        this.file = data
        this.addSignature()
        this.variant = 'success'

        setTimeout(() => {
          this.feedback = 'Signature updated successfully'

          this.loading = false 

        }, 2000)
      }
    },
    async addSignature() {
      const data = this.file
      const instance = await this.$cloudinary.upload(data, {
        folder: 'signature',
        uploadPreset: 'signature',
      })
      try {
        const res = await instance
        if (res) {
          const response = res.secure_url
          this.$store.dispatch('auth/editSignature', response)
        }
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.pad {
  padding: 50px 0 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .sign-pad {
    border: 1px solid rgb(225, 225, 225);
    background: $light;
    position: relative;

    .spinner {
      position: absolute;
      right: 3px;
      bottom: 3px;
      background: white;
    }
  }

  .white {
    background: $light;
  }

  .buttons {
    display: flex;
    justify-content: center;
  }

  .danger {
    color: red;
  }

  .success {
    color: rgb(52, 156, 52);
  }

  .prompt {
    height: 15px;
  }
}
</style>

<template>
  <div class="update-status text-center">
    <p class="new-member pt-2 text-center">Replace Contract</p>
    <p class="status mt-2 text-center">
      The status of a client or freelancer is based on
    </p>
<UploadContract :show=false></UploadContract>
    <div class="update-info">
      <p>
        The status of a client or freelancer is based on who created the
        contract or who the role is assigned to. In that regard, no separate
        client
      </p>
    </div>

    <BlueButton button-content="Replace Contract" class="update-btn" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UploadContract from '@/components/dashboardComponents/UploadContract.vue'

export default Vue.extend({
  name: 'UpdateStatus',
  components: {UploadContract},
  props: {},
  data() {
    return {
      File: [],
      isDash: false as boolean,
    }
  },
  methods: {
    nextForm(value: string) {
      this.$emit('nextForm', value)
    },
    uploadFile(e: any) {
      this.isDash = true
      this.File = e.target.files
    },
    dragFile(e: any) {
      this.isDash = true
      this.File = e.dataTransfer.files
    },
  },
})
</script>

<style lang="scss" scoped>
.update-status {
  max-width: 523px;
  padding: 44px 71px 64px 71px;

  .new-member {
    font-family: Visuelt Pro, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
  }
  .status {
    font-family: Sofia Pro, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    color: $light-text;
  }

  .update-btn {
    max-width: 190px;
    margin: 71px auto 0 auto;
  }

  .update-info {
    border-left: 4px solid $info-yellow;
    margin-top: 39px;

    p {
      padding: 14px 28px;
      background: #fffcee;
      border-radius: 7px;
      font-family: Visuelt Pro, sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: 21px;
      letter-spacing: 0em;
      text-align: left;
      color: $dark-text;
    }
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

  span {
    font-weight: 500;
    color: $primary-color;
    text-decoration: underline;
    cursor: pointer;
  }
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

.drag-container {
  margin: 47px 0 77px 0;
  position: relative;
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

.files {
  display: flex;
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 5% 3%;
}

.file {
  padding: 10px 15px;
  background: $primary-color;
  border-radius: 23px;
  color: $light;
  margin-left: 15px;
  font-family: Sofia Pro, sans-serif;
  font-size: 14px;
  line-height: 14px;
}
@include mobile {
  .update-status {
    padding: 20px 10px;
  }
  .undashed {
    height: 100px;
  }
  .dashed {
    height: 100px;
  }
  .drag-container {
    margin: 20px 0 20px 0;
  }
  .file {
    margin: 0px;
  }
}
</style>

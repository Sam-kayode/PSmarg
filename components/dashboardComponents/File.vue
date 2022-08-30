<template>
  <a
    class="link"
    :href="file"
    download
    rel="noopener noreferrer"
    target="_blank"
  >
    <div class="file">
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex justify-content-center align-items-center">
          <div
            class="
              icon-cont
              d-flex
              align-items-center
              justify-content-center
              mr-3
            "
          >
            <img src="/word.svg" alt="" />
          </div>
          <div>
            <p class="file-desc m-0">
              Contract approval from designated partners
            </p>
          </div>
        </div>
        <!-- <dropdown-menu
        :direction="'right'"
        :overlay="false"
        :is-open="showDrop"
        @click="showdrop()"
      >
        <div slot="trigger">
          <b-icon icon="three-dots-vertical" class="h4 file-icon"></b-icon>
        </div>
        <ul
          slot="body"
          class="
            avatar-ul
            d-flex
            flex-column
            align-items-center
            justify-content-center
            m-0
          "
        >
          <li class="avatar-li mb-3" @click="showdrop()">
            <span><b-icon icon="trash" @click="showdrop()"></b-icon></span>
            <p class="d-inline" @click="showdrop()">Remove</p>
          </li>
          <li class="avatar-li mt-3" @click="showdrop()">
            <span
              ><b-icon icon="arrow-repeat" @click="showdrop()"></b-icon
            ></span>
            <p
              class="d-inline"
              @click="
                showdrop()
                $bvModal.show('modal-replace')
              "
            >
              Replace
            </p>
          </li>
        </ul>
      </dropdown-menu> -->
        <a :href="file" download rel="noopener noreferrer" target="_blank">
          <img src="/download.png" alt="" class="h4 file-icon" />
        </a>
      </div>
      <b-modal id="modal-replace" centered hide-footer hide-header no-stack>
        <ReplaceContract />
      </b-modal>
      <div class="d-flex align-items-center justify-content-between mt-4">
        <div class="calendar d-inline">
          <b-icon
            icon="calendar-event-fill"
            style="color: #2522a7"
            class="mr-3"
          ></b-icon>

          <span class="date">AUG 10, 2012</span>
        </div>

        <div class="doc-avatar">
          <img src="/members/ade.svg" alt="" />
        </div>
      </div></div
  ></a>
</template>

<script lang="ts">
import Vue from 'vue'
import ReplaceContract from '@/components/dashboardComponents/Modals/ReplaceContract.vue'
export default Vue.extend({
  name: 'File',
  components: { ReplaceContract },
  props: {
    file: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      showDrop: false as boolean,
    }
  },
  methods: {
    showdrop() {
      this.showDrop = !this.showDrop
    },
  },
})
</script>

<style lang="scss">
.link {
  color: #000000;
  &:hover {
    text-decoration: none;
    color: #000000;
  }
}
.file {
  max-width: 480px;
  padding: 15px;
  cursor: pointer;
  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  margin-top: 40px;

  .v-dropdown-menu__container {
    position: absolute;
    top: 80%;
    left: 60%;
    bottom: auto;
    min-width: 141px !important;
    height: 116px;
    overflow: hidden;
    background-color: #fff;
    border-radius: 7px !important;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  }

  .file-desc {
    width: 201px;
    font-family: Sofia Pro, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
  }

  .file-icon {
    cursor: pointer;
    height: 30px;
  }
  .icon-cont {
    padding: 8px;
    background: #eaf4ff;
    border-radius: 50%;
    width: 36px;
    height: 36px;
  }

  .calendar {
    padding: 8px 11px;
    background: #edf1ff;
    border-radius: 5px;
    width: fit-content;
    .date {
      font-family: Visuelt Pro, sans-serif;
      font-size: 11px;
      font-style: normal;
      font-weight: 500;
      line-height: 14px;
      letter-spacing: 0.055em;
      text-align: left;
      color: $primary-color;
    }
  }
}

@include mobile {
  .file {
    .v-dropdown-menu__container {
      left: -500% !important;
    }
  }
}
</style>

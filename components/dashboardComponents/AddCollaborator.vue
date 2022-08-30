<template>
  <div class="add-new text-center">
    <p class="new-member pt-2">Add collaborator</p>
    <div class="capsules">
      <div v-for="(collaborator, i) in collaborators" :key="i" class="capsule">
        {{ collaborator.name }}
        <p @click="remove(i)">&#10006;</p>
      </div>
    </div>
    <p class="status mt-2 text-center">Add collaborators to this contract</p>
    <BasicInput v-model="colName" placeholder="Collaborator  Name" />
    <BasicInput v-model="email" placeholder="Enter Email Address" />
    <div class="dropdowns">
      <dropdown-menu :direction="'right'" :overlay="false" :is-open="showDrop2">
        <div slot="trigger" @click="showdrop2()">
          <div class="drop d-flex align-items-center justify-content-between">
            <div>{{ value2 }}</div>
            <div class="ml-auto"><b-icon icon="chevron-down"></b-icon></div>
          </div>
        </div>
        <div slot="body" class="body">
          <p class="my-0" @click="setTime2('freelancer')">Freelancer</p>
          <p class="my-0" @click="setTime2('client')">Client</p>
        </div>
      </dropdown-menu>
    </div>
    <p class="error">{{ error }}</p>
    <div class="sub-btn">
      <LightButton
        button-content="Save Collaborator"
        class="invite-btn"
        :loading="loading"
        @click.native="addCollaborator"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AddCollaborator',
  props: {
    id: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      loading: false,
      showDrop2: false as boolean,
      value2: 'Collaborator Type',
      email: '',
      colName: '',
      collaborators: [] as any,
      error: '',
    }
  },
  methods: {
    showdrop2() {
      this.showDrop2 = !this.showDrop2
    },
    setTime2(val: string) {
      this.value2 = val
      this.showdrop2()
    },
    addCollaborator() {
      const data = {
        collaborator_type: this.value2,
        name: this.colName,
        email: this.email,
      }
      if (this.value2 !== 'Collaborator Type' && this.colName && this.email) {
        this.collaborators.push(data)
        this.update()
        this.value2 = 'Collaborator Type'
        this.colName = ''
        this.email = ''
      } else {
        this.error = 'Incomplete collaborator details'
        setTimeout(() => {
          this.error = ''
        }, 3000)
      }
    },
    update() {
      this.$emit('addCollaborator', this.collaborators)
    },
    remove(i: number) {
      this.collaborators.splice(i, 1)
      this.update()
    },
  },
})
</script>

<style lang="scss">
.add-new {
  max-width: 100%;
  margin: 0 auto;
  .success {
    width: 102px;
  }

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

  .invite-btn {
    max-width: 190px;
    margin: 60px auto 0 auto;
  }

  .v-dropdown-menu {
    width: 100%;
    &__container {
      position: absolute;
      top: 110%;
      bottom: auto;
      width: 100%;
      overflow: hidden;
      background-color: #fff;
      border: 1px solid rgb(243, 243, 243);
      background: #ffffff;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
      border-radius: 7px;
    }
  }

  .body {
    max-height: 100px;
    overflow-y: auto;
    width: 100%;
    p {
      text-align: left;
      padding: 10px 20px;
      font-size: 14px;

      &:hover {
        background-color: rgb(184, 184, 184);
      }
    }
  }
  .drop {
    border: 0.5px solid #e0e0e0;
    box-sizing: border-box;
    width: 100%;
    border-radius: 7px;
    padding: 22px 25px;
    font-family: Sofia Pro;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 12px;
    letter-spacing: 0em;
    text-align: left;
    cursor: pointer;
    margin-top: 10px;
  }
  .invite-btn {
    height: 50px;
    margin-top: 30px;
  }

  .capsules {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;

    .capsule {
      text-overflow: ellipsis;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      background-color: $primary-color;
      border-radius: 50px;
      padding: 2px 20px;
      color: #ffffff;
      position: relative;

      p {
        position: absolute;
        right: 10px;
        top: 1px;
      }
    }
  }

  .error {
    color: #ff0000;
  }
}

@include mobile {
  .invite-new {
    padding: 20px 10px;
  }
}
</style>

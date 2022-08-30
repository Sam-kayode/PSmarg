<template>
  <div>
    <div class="password d-flex flex-column">
      <input
        v-model="password"
        class="p-input mr-auto px-4"
        :type="type"
        :placeholder="placeholder"
        required
        @input="onInput"
      />
      <div class="toggle ml-auto" @click="showPassword">
        <b-icon
          v-if="type == 'password'"
          class="h5 eye mb-0"
          icon="eye"
          variant="secondary"
        ></b-icon>
        <b-icon
          v-else
          class="h5 eye mb-0"
          icon="eye-slash"
          variant="secondary"
        ></b-icon>
      </div>
    </div>
    <div v-if="show" class="indicator mt-4 text-left">
      <div class="signal">
        <div
          class="step weak"
          :class="{ weak: weak, fair: fair, strong: strong }"
        ></div>
        <div class="step" :class="{ fair: fair, strong: strong }"></div>
        <div class="step" :class="{ strong: strong }"></div>
        <div class="d-inline-block ml-2">
          <p v-if="weak && !fair" class="weak-text">Too weak</p>
          <p v-if="fair && !strong" class="fair-text">Fair</p>
          <p v-if="strong" class="strong-text">Strong</p>
        </div>
      </div>
      <div class="checks row">
        <div class="d-flex col-6" :class="upper ? 'positive' : ''">
          <span>&#11044;</span>
          <p class="">One uppercase letter</p>
        </div>
        <div class="d-flex col-6" :class="special ? 'positive' : ''">
          <span>&#11044;</span>
          <p class="">One special character</p>
        </div>
        <div class="d-flex col-6" :class="length ? 'positive' : ''">
          <span>&#11044;</span>
          <p class="">Minimum of 8 characters</p>
        </div>
        <div class="d-flex col-6" :class="lower ? 'positive' : ''">
          <span>&#11044;</span>
          <p class="">One lowercase letter</p>
        </div>
        <div class="d-flex col-6" :class="number ? 'positive' : ''">
          <span>&#11044;</span>
          <p class="">One number</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    placeholder: {
      type: String,
      default: null,
    },
     show: {
      type:Boolean,
      default:false,
    },
  },
  data() {
    return {
      type: 'password' as string,
      password: '' as string,
      strength: '',
      upper: false,
      lower: false,
      number: false,
      special: false,
      length: false,
      weak: true,
      fair: false,
      strong: false,
    }
  },
  watch: {
    password(val) {
      const uppercase = /^(?=.*[A-Z])/
      const upResult = uppercase.test(this.password)
      this.upper = !!upResult

      const lowerCase = /^(?=.*[a-z])/
      const lowResult = lowerCase.test(this.password)
      this.lower = !!lowResult

      const number = /^(?=.*?[0-9])/
      const numResult = number.test(this.password)
      this.number = !!numResult

      const special = /^(?=.*\W)/
      const specialResult = special.test(this.password)
      this.special = !!specialResult

      if (val.length >= 8) {
        this.length = true
      } else {
        this.length = false
      }

      const arr = [
        this.upper,
        this.lower,
        this.number,
        this.special,
        this.length,
      ]

      const counts = {
        truth: 0,
        false: 0,
      }
      arr.forEach((x) => {
        if (x === true) {
          counts.truth = (counts.truth || 0) + 1
        }
        if (x === false) {
          counts.false = (counts.false || 0) + 1
        }
      })

      if (counts.truth === 5) {
        this.strong = true
      } else {
        this.strong = false
      }

      if (
        counts.truth >= 3 &&
        this.length === true &&
        (this.number || this.special)
      ) {
        this.fair = true
      } else {
        this.fair = false
      }
    },
  },
  methods: {
    showPassword() {
      if (this.type === 'password') {
        this.type = 'text'
      } else {
        this.type = 'password'
      }
    },
    onInput(event: any) {
      this.$emit('input', event.target.value)
    },
  },
})
</script>
<style lang="scss" scoped>
.password {
  box-sizing: border-box;
  border-radius: 7px;
  width: 100%;
  height: 56px;
}

.p-input {
  width: 100%;
  height: 56px;
  border: 0.5px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 7px;
  outline: none;
  padding: 21px 28px;
  margin: 10px 0;
  font-family: Visuelt Pro;
  font-size: 14px;
  color: $dark-text;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
}

.eye {
  cursor: pointer;
}

.toggle {
  position: relative;
  bottom: 51px;
  right: 20px;
}

.step {
  width: 21%;
  height: 3px;
  background: rgb(226, 225, 225);
  display: inline-block;
  margin-right: 2%;
}

.checks {
  color: rgb(160, 159, 159);

  span {
  }
  p {
    font-family: Visuelt Pro;
    font-size: 13px;
    padding-top: 4px;
    margin-bottom:0px;
  }
}

.positive {
  color: rgb(72, 185, 72);
}

.weak {
  background-color: rgb(226, 136, 136);
}
.fair {
  background-color: rgb(243, 243, 152);
}

.strong {
  background-color: rgb(72, 185, 72);
}

.weak-text {
  color: rgb(226, 136, 136);
}
.fair-text {
  color: rgb(243, 243, 152);
}

.strong-text {
  color: rgb(72, 185, 72);
}
</style>

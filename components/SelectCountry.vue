<template>
  <div>
    <dropdown-menu
      :direction="'right'"
      :overlay="false"
      class="drop-contain"
      :is-open="showDrop"
    >
      <div
        slot="trigger"
        class="
          country
          d-flex
          flex-row
          align-items-center
          justify-content-center
        "
      >
        <p class="mb-0 mt-1 mr-auto ml-4 country-number">
          <span> {{ displayCountry.alpha2Code }} </span>
          {{ displayCountry.name }}
        </p>

        <b-icon class="chevron" icon="chevron-down"></b-icon>
      </div>
      <div
        slot="body"
        class="
          country-ul
          d-flex
          flex-column
          align-items-center
          justify-content-left
          m-0
        "
      >
        <div
          v-for="country in countries"
          :key="country.name"
          class="country-li"
          @click="showdrop()"
        >
          <label
            :for="country.name"
            class="m-0 p-0 country-name d-flex align-items-center"
          >
            <input
              :id="country.name"
              v-model="countryInfo"
              type="radio"
              name="country"
              class="mr-3 radio"
              :value="country.alpha2Code"
            />
            <p class="m-0">{{ country.name }}</p>

            <span class="ml-auto">{{ country.alpha2Code }}</span>
          </label>
        </div>
      </div>
    </dropdown-menu>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'SelectCard',
  data() {
    return {
      showDrop: false as boolean,
      countryInfo: '',
      displayCountry: {
        name: 'Select Country of Residence',
      },
      countries: [],
    }
  },
  watch: {
    countryInfo() {
      this.displayCountry =
        this.countries[
          this.countries.findIndex((country: any) => {
            return country.alpha2Code === this.countryInfo
          })
        ]
      this.$emit('selectCountry', this.countryInfo)
    },
  },
  mounted() {
    this.getCountries()
  },
  methods: {
    showdrop() {
      this.showDrop = !this.showDrop
    },
    async getCountries() {
      const result: [] = await this.$axios.$get(
        'https://restcountries.com/v2/all?fields=name,currencies,alpha2Code'
      )
      this.countries = result
    },
  },
})
</script>
<style lang="scss">
.country-icon {
  width: 40px;
}

.drop-contain {
  width: 100%;
  .v-dropdown-menu__container {
    position: absolute;
    top: 100%;
    bottom: auto;
    width: 100%;
    overflow: hidden;
    background-color: #fff;
    border: 1px solid rgb(243, 243, 243);
    background: #ffffff;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
    border-radius: 7px;
  }
  .chevron {
    width: 10px;
    color: #b8b8b8;
  }
  .country {
    max-width: 467px;
    height: 56px;
    padding: 14px;
    border: 0.5px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 7px;
    cursor: pointer;
  }
  .country-ul {
    padding: 28px 0px;
    max-height: 300px;
    overflow-y: scroll;
  }
  .country-number {
    font-family: Sofia Pro, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: $dark-text;

    span {
      font-weight: bolder;
      margin-right: 20px;
    }
  }

  .country-li {
    width: 100%;
    padding: 19px 25px;
    cursor: pointer;

    span {
      font-weight: bolder;
    }
    &:hover {
      background-color: rgb(196, 196, 196);
    }
  }

  .country-name {
    font-family: Sofia Pro, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    .radio {
      //   display: none;
    }
  }
}
</style>

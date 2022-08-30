<template>
  <div class="recent-activities">
    <div
      v-for="activity in activities"
      :key="activity.id"
      class="recent-activity-card d-flex"
    >
      <div class="avatar-container"><img :src="activity.avatar" alt="" /></div>
      <div>
        <p class="recent-desc">
          {{ activity.desc }}
        </p>
        <LightButton
          class="light-btn"
          :button-content="activity.btnContent"
          @click.native="$bvModal.show(name + instance)"
        />

        <p class="date m-0">MAR 25, 2010</p>
      </div>
    </div>
    <b-modal
      :id="name + instance"
      :title="name + instance"
      class="p-0"
      no-stacking
      ok-only
      centered
      hide-footer
      hide-header
    >
      <RecentRequest />
    </b-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RecentRequest from '@/components/dashboardComponents/Modals/RecentRequest.vue'
export default Vue.extend({
  name: 'RecentACtivities',

  components: {
    RecentRequest,
  },
  props: {
    instance: {
      type: String,
      default: '' as string,
    },
  },
  data() {
    return {
      name: 'modal-9',

      activities: [
        {
          desc: `Akintola request to cancel this contract`,
          btnContent: 'View Request',
          date: 'MAR 25, 2010',
          avatar: '/name2.svg',
          id: 1,
        },
        {
          desc: `You rejected Akintola’s cancellation request to this contract`,
          btnContent: 'Escalate Request',
          date: 'MAR 25, 2010',
          avatar: '/name1.svg',
          id: 2,
        },
        {
          desc: `You rejected Akintola’s cancellation request to this contract`,
          btnContent: 'Escalate Request',
          date: 'MAR 25, 2010',
          avatar: '/name1.svg',
          id: 3,
        },
      ],
    }
  },
})
</script>
<style lang="scss" scoped>
.recent-activities {
  margin-bottom: 150px;
}
.recent-activity-card {
  padding: 20px 12px;
  background: $light;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  position: relative;
  margin:10px 0;
}

.recent-desc {
  font-family: Sofia Pro, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 6px;
}

.avatar-container {
  border-radius: 50%;
  margin-right: 18px;
}

.date {
  position: absolute;
  bottom: 3px;
  right: 33px;
  font-family: Visuelt Pro, sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0.055em;
  color: $light-text;
}

.cancel {
  color: #d71920;
  background: #ffebec;
  border-radius: 23px;
  padding: 6px;
}

.light-btn {
  max-width: 145px;
}
</style>

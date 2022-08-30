<template>
  <div id="app" class="contain">
    <ul class="page">
      <li class="page__btn">&#x3c;</li>
      <li class="page__numbers">1</li>
      <li class="page__numbers active">2</li>
      <li class="page__numbers">3</li>
      <li class="page__dots">...</li>
      <li class="page__numbers">10</li>
      <li class="page__btn">&#x3e;</li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
:root {
  --primary: #23adad;
  --greyLight: #23adade1;
  --greyLight-2: #cbe0dd;
  --greyDark: #2d4848;
}

.contain {
  display: flex;
  margin-top:30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--greyLight-2);
  color: var(--greyDark);
  -webkit-font-smoothing: subpixel-antialiased;
}

ul {
  list-style-type: none;
}
.page {
  display: flex;
  align-items: center;
  height: 50px;
  border-radius: 10px;
  background: #eeeeee;
  box-shadow: 0 10px 15px rgba(#5a6181, 0.05);

  &__numbers,
  &__btn,
  &__dots {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    font-size: 16px;
    cursor: pointer;
  }

  &__dots {
    width: 40px;
    height: 40px;
    color: var(--greyLight);
    cursor: initial;
  }

  &__numbers {
    width: 40px;
    height: 40px;
    border-radius: 8px;

    &:hover {
      color: var(--primary);
    }

    &.active {
      color: #ffffff;
      background: var(--primary);
      font-weight: 600;
      border: 1px solid var(--primary);
    }
  }

  &__btn {
    color: var(--greyLight);
    pointer-events: none;

    &.active {
      color: var(--greyDark);
      pointer-events: initial;

      &:hover {
        color: var(--primary);
      }
    }
  }
}
</style>

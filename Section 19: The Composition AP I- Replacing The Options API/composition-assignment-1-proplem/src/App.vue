<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="goalIsVisible">{{courseGoal}}</h3>
  <h3 v-if="courseData.goalIsVisible">{{courseData.courseGoal}}</h3>
  <h3 v-if="courseDataRec.goalIsVisible">{{courseDataRec.courseGoal}}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toogleGoalVisibility">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
  import {reactive, ref} from 'vue';
export default {
  setup(){

    const courseGoal=ref('Master Vue');
    const goalIsVisible=ref(false);

    const courseData=ref({
      courseGoal:'Master Vue',
      goalIsVisible:false,
    });

    const courseDataRec=reactive({
      courseGoal:'Master Vue',
      goalIsVisible:false,
    });

    function toogleGoalVisibility(){
      goalIsVisible.value=!goalIsVisible.value;
      courseData.value.goalIsVisible=!courseData.value.goalIsVisible;
      courseDataRec.goalIsVisible=!courseDataRec.goalIsVisible;
    }

    return {courseGoal,goalIsVisible,toogleGoalVisibility,courseData,courseDataRec};
  }
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
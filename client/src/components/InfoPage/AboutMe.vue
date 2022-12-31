<template>
  <div class="about-me-container">
    <div class="about-me-text">
      <div class="title-container">
        <h1>My Story</h1>
      </div>
      <p>
        My story didn't begin in the world of programming. It began behind the
        wheel of a semi truck.
      </p>
      <p>
        I grew up on a small farm in rural Western Kentucky. As a child, I was
        passionate about music. I started taking piano lessons at the age of 5,
        and in middle school I picked up the saxophone to play in the school
        band. By high school, I was regularly a member of the Kentucky All-State
        band, and marched DCI drum corps from 2002 until 2004.
      </p>
      <p>
        In 2004, I was accepted into the University of Kentucky's saxophone
        studio to study music education under the direction of Dr. Miles Osland.
      </p>
      <p>
        While in college, tragedy struck. Both of my parents suddenly passed
        away. I tried to continue college as long as possible, but was unable
        due to the cost. In 2006, I returned home to the family farm to work.
        couldn't run the farm by myself without help, and I didn't have money to
        to hire any hands. Fortunately, I had an old Peterbilt semi truck we
        used on the farm for hauling grain. I passed my CDL test three days
        after my 21st birthday, and immediately got to work.
      </p>
      <p>
        Unfortunately, when starting out, money was tight. I needed a website
        for my business, but I couldn't afford to pay someone to build it for
        me. So, while sitting on the bed in the sleeper of the Pete at night
        after a 14 hour day of driving, I taught myself HTML and CSS, and
        JavaScript. I was able to learn enought to build the website, and in the
        process, I discovered a new passion: programming.
      </p>
      <p>
        In 2008 following a series of lucky decisions and a lot of hard work, I
        bought three more trucks and started hiring employees. By 2010, we were
        up to 32 employees and 10 trucks. In 2012, I would sell the business and
        all of its assets to the company who would end up giving me my first
        programming job.
      </p>
      <p>
        I worked for them up until their bankruptcy and abrupt closure in 2017
        on the team that was building their internal dispatch and load planning
        software. After their closure, I transitioned to a small consulting firm
        that built software for the RV manufacturing industry. I worked there
        for four years until the downturn in the RV industry caused by Covid
        forced them to close their doors.
      </p>
      <p>
        In 2021, I took a role at Marvin Windows and Doors as a their primary
        on-site senior software engineer. There I worked hand in hand with the
        mechanical engineering, product design, and quality assurance teams to
        build interal software tools to help change the way they designed and
        built their products.
      </p>
      <p>
        In 2022, I left Marvin and took the knowledge I had gained there to
        build a startup called Borderland Software, which focuses on building
        software products for the wood products manufacturing industry.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutMe",
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
.about-me-container {
  width: 100%;
  height: 100%;
  @include flex(column, center, center);
  gap: 3em;
  .about-me-text {
    .title-container {
      width: 80%;
      height: 2rem;
      margin-bottom: 2rem;
      h1 {
        font-size: 2em;
        font-weight: 100;
      }
    }
    width: 80%;
    height: 100%;
    @include flex(column, center, flex-start);
    gap: 1.25em;
    p {
      font-size: 0.9em;
      font-weight: 100;
      line-height: 1.5;
    }
  }
}
</style>

<template>
  <div id="app">
    <header>
      <h1><span class="symbol">a□f</span> interfaces</h1>
    </header>
    <main>
      <article>
        <header>
        <h2>Wolf &amp; Irving</h2>
        <p>Line sheet of eco-friendly table linen</p>
        </header>
        <ul>
          <li>Graphic design for printed and on-screen media</li>
          <li>Product information auto-imported from Shopify store for faster turnaround</li>
          <li>Wholesale ordering made easy for business partners thanks to print- and screen-friendly informational catalogue</li>
        </ul>
      </article>
      <article>
        <header>
        <h2>China Admissions</h2>
        <p>System to collect and manage student applications</p>
        </header>
        <ul>
          <li>Automated application collection removes a bottleneck and allows for business expansion</li>
          <li>Extendable backend to help staff stay on top of application review process, with Google Drive integration for safer file review</li>
          <li>Integration with Salesforce to capture leads</li>
          <li>Modern mobile-friendly application form to collect required information and supporting documentation from future students</li>
        </ul>
      </article>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  font-family: mplus-1p-regular, Osaka-Mono, monospace;
  text-align: center;
}
#app main {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  text-align: left;
}
article {
  width: 50vw;
  letter-spacing: .03em;
}

h2 {
  font-family: mplus-1p-regular, Osaka-Mono, monospace;
}
h1, h2 {
  font-weight: normal;
  letter-spacing: -.06em;
}

header p {
}
</style>

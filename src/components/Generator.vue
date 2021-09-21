<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="url">URL</label>
        <input
          type="text"
          class="form-control"
          id="url"
          required
          v-model="links.url"
          name="url"
        />
      </div>
      <button @click="genUrl" class="btn btn-success btn-block">Generate New Url</button>
    </div>

    <div v-else>
      <h4>Url successfully created!</h4>
      <h3>{{gen_url}}</h3>
      <button class="btn btn-success btn-block" @click="newUrl">Generate New Url</button>
    </div>
  </div>
</template>

<script>
import ApplicationDataService from "../services/ApplicationDataService";

export default {
  name: "add-tutorial",
  data() {
    return {
      links: {
        id: null,
        url: "",
        code: ""
      },
      submitted: false,
      gen_url: "",
    };
  },
  methods: {
    genUrl() {
      let gen_code = (Math.random() + 1).toString(36).substring(2);
      var data = {
        url: this.links.url,
        code: gen_code
      };

      ApplicationDataService.create(data)
        .then(response => {
          this.links.id = response.data.id;
          this.gen_url = "http://localhost:8081/"+response.data.code;
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },

    findUrl() {
      ApplicationDataService.findByCode(this.$route.params.code)
        .then(response => {
          window.location.href = response.data.url;
          // redirect to url
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  created(){
    if(this.$route.params && this.$route.params.code){
      this.findUrl();
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 800px;
  margin: auto;
}
</style>
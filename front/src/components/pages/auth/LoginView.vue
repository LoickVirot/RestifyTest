<template>
  <div id="login-page">
    <div class="background"></div>
    <card-box class="login-card">
      <card-content>
        <h1>Connexion</h1>
        <error-box type="danger" v-show="errorMessage !== ''">
          {{ errorMessage }}
        </error-box>
        <div class="form-group">
          <input-form type="text" id="login-username" placeholder="Nom d'utilisateur" v-model="username"/>
        </div>
        <div class="form-group">
          <input-form type="password" id="login-password" placeholder="Mot de passe" v-model="password" />
        </div>
        <div class="form-group buttons">
          <a href="#" class="forgot-pass">Mot de passe oublié</a>
          <button-item type="primary" value="Se connecter" :onClick="test.bind(this)"/>
        </div>
      </card-content>
    </card-box>
  </div>
</template>
<script>

import CardBox from '../../mixins/card/CardBox.vue';
import CardContent from '../../mixins/card/CardContent.vue';
import InputForm from '../../mixins/form/InputForm.vue';
import ButtonItem from '../../mixins/form/ButtonItem.vue';
import ErrorBox from '../../mixins/error/ErrorBox.vue';

import EventBus from '../../../services/EventBus'
import EventsEnum from '../../../enum/EventsEnum';

export default {
  components: {
    CardBox,
    CardContent,
    InputForm,
    ButtonItem,
    ErrorBox
  },
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    async test() {
      let result = await this.$store.dispatch('login', {
        username: this.username, 
        password: this.password
      });
    },
  },
  created() {
    EventBus.$on(EventsEnum.LOGIN_SUCCESS, event => {
      this.$router.push('/');
    });
    EventBus.$on(EventsEnum.LOGIN_INCORRECT_USERNAME, event => {
      this.errorMessage = 'Please fill your username';
    })
    EventBus.$on(EventsEnum.LOGIN_INCORRECT_PASSWORD, event => {
      this.errorMessage = 'Please fill your password';
    })
    EventBus.$on(EventsEnum.LOGIN_INCORRECT, event => {
      this.errorMessage = 'Invalid login';
    })    
  }
};
</script>
<style>
#login-page {
  position: absolute;
  left: -250px;
  right: 0;
}

#login-page .background {
  position: absolute;
  left: 0;
  right: 0;
  z-index: -1;
  height: 100vh;
  background: url('/image/login-background.jpg');
  background-size: cover;
  opacity: 0.4;
}

.login-card {
  margin: auto;
  width: 450px;
  margin-top: 150px;
}

.login-card h1 {
  text-align: center;
}

.login-card .forgot-pass {
  text-align: right;
  font-size: 0.8em;
  color: #333;
  margin: 10px;
}

#login-page .form-group {
  margin-top: 20px;
}

#login-page .form-group label {
  font-size: 0.9em;
  font-weight: bold;
}

#login-page .buttons {
  display: flex;
  justify-content: space-between
}
</style>

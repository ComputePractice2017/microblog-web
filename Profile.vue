import '../CSS/Styles.css'
<template>
  <div class="Users">
    <div class="container-fluid" style="background-color:black;">
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">Микро-блог</a>
          </div>
          <ul class="nav navbar-nav">
            <li class="active">
              <router-link to="/#">Лента новостей</router-link>
            </li>
          </ul>
          <form class="navbar-form navbar-left">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Что Вам угодно?">
            </div>
            <button type="submit" class="btn btn-default">Сейчас найдём!</button>
          </form>
        </div>
      </nav>
      <div class="col-sm-12 col-md-12" style="background-color:lavender;">
        <p>Лента</p>
        <div class="row">
          <div class="col-sm-6 col-md-3 supp" style="background-color:SkyBlue;">
            <p>
              <img class="iconautor" src="http://cbcbberkeley.com/wp-content/uploads/2016/06/marijuanaleaf-200x201.gif" alt="..." style="float: left">
              <p class="autor">Crathos
                    <span class="autortwitter">@one_shot · 13 mar.</span>
                  </p>
              <form class="navbar-form navbar-left">
                <div class="form-twit">
                  <input type="text" v-model="NewTwit.message" class="caja tweet" placeholder="Что за новость?">
                </div>
                <button v-on:click="addNewTwit" class="btn btn-default">Добавить твит</button>
              </form>
            </p>
          </div>
          <!--Блок фида-->
          <div class="col-sm-6 col-md-6 feed" style="background-color:pink;">
            <div class="row show-grid">
              <!--Блок самого твита в фиде-->
              <div class="col-sm-3 col-md-3 col-lg-12 twit">
                <div class="caja tweet">
                  <img class="iconautor" src="http://cbcbberkeley.com/wp-content/uploads/2016/06/marijuanaleaf-200x201.gif" alt="..." style="float: left">
                  <p class="autor">Crathos
                    <span class="autortwitter">@one_shot · 13 mar.</span>
                  </p>
                  <div class="Twits">
                   
                      <table class="table"> 
                        <tbody>
                          <tr v-for="Twit in Twits">
                            <td>{{Twit.message}}</td>
                          </tr>
                        </tbody>
                      </table>
                  </div>
                </div>
              </div>
              <div class="col-sm-3 col-md-3 col-lg-12 twit">
                <div class="caja tweet">
                  <img class="iconautor" src="https://vignette2.wikia.nocookie.net/heroesofthestorm/images/e/e2/W3_Prince_Arthas_Portrait.jpg/revision/latest?cb=20170428003131" alt="..." style="float: left">
                  <p class="autor">Arthas
                    <span class="autortwitter">@non_lich_king · 16 mar.</span>
                  </p>
                  <p>Я становлюсь королём, отец!</p>
                  <img src="https://i.ytimg.com/vi/OtKAYaoFkfY/maxresdefault.jpg" alt="Заглушка_1" class="img_lenta_tweet">
                </div>
              </div>
              <div class="col-sm-3 col-md-3 col-lg-12 twit">
                <div class="caja tweet">
                  <img class="iconautor" src="https://vignette2.wikia.nocookie.net/heroesofthestorm/images/e/e2/W3_Prince_Arthas_Portrait.jpg/revision/latest?cb=20170428003131" alt="..." style="float: left">
                  <p class="autor">Author_2
                    <span class="autortwitter">@2 · 16 mar.</span>
                  </p>
                  <p>twit_2</p>
                  <img src="https://i.ytimg.com/vi/OtKAYaoFkfY/maxresdefault.jpg" alt="Заглушка_2" class="img_lenta_tweet">
                </div>
              </div>
              <div class="col-sm-3 col-md-3 col-lg-12 twit">
                <div class="caja tweet">
                  <img class="iconautor" src="https://vignette2.wikia.nocookie.net/heroesofthestorm/images/e/e2/W3_Prince_Arthas_Portrait.jpg/revision/latest?cb=20170428003131" alt="..." style="float: left">
                  <p class="autor">Author_3
                    <span class="autortwitter">@3 · 16 mar.</span>
                  </p>
                  <p>twit_3</p>
                  <img src="https://i.ytimg.com/vi/OtKAYaoFkfY/maxresdefault.jpg" alt="Заглушка_3" class="img_lenta_tweet">
                </div>
              </div>
              <div class="col-sm-3 col-md-3 col-lg-12 twit">
                <div class="caja tweet">
                  <img class="iconautor" src="https://vignette2.wikia.nocookie.net/heroesofthestorm/images/e/e2/W3_Prince_Arthas_Portrait.jpg/revision/latest?cb=20170428003131" alt="..." style="float: left">
                  <p class="autor">Author_4
                    <span class="autortwitter">@4 · 16 mar.</span>
                  </p>
                  <p>twit_4</p>
                  <img src="https://i.ytimg.com/vi/OtKAYaoFkfY/maxresdefault.jpg" alt="Заглушка_4" class="img_lenta_tweet">
                </div>
              </div>
            </div>
          </div>
          <!--Блок для фильтрации твитов. Пока прикручен только макет datepicker'а-->
          <div class="col-sm-6 col-md-3 filter" style="background-color:orange;">
            <h2>Фильтр по дате</h2>
            <p>
              <div class="col-10">
                <input class="form-control" type="date" value="2011-08-19" id="example-date-input">
                <div class="input-group date" data-provide="datepicker">
                  <input type="text" class="form-control">
                  <div class="input-group-addon">
                    <span class="glyphicon glyphicon-th"></span>
                  </div>
                </div>
              </div>
            </p>
          </div>
          <div class="col-sm-6 col-md-3 filter" style="background-color:SkyBlue;">
            <h2>Интересные страницы</h2>
            <p>
              <div class="list-group">
                <button type="button" class="list-group-item">first</button>
                <button type="button" class="list-group-item">second</button>
                <button type="button" class="list-group-item">therd</button>
                
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
    {{newvar}}
  </div>

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      Twits: [
        {
          'message': ''
        }
      ],
      NewTwit: {
        'message': ''
      }
    }
  },
  methods: {
    addNewTwit: function () {
      var obj = {
        'message': ''
      }
      obj.message = this.NewTwit.message
      this.Twits.push(obj)
    }
  }
}
</script>

<style>
.img_lenta_tweet{
  width: 100%;
  height: 100%;
}

.caja {
  background-color: #fff;
  display: inline-block;
  width: 100%;
}

#box-suggested {
  width: 25% !important;
  margin-top: 10px;
}

#top,
.caja,
#middlebar {
  border: 1px solid #e1e8ed;
}

#profile {
  position: relative;
  left: 0px;
  top: -160px;
}

nav {
  display: inline-block;
}

#navTop {
  margin-top: 8px;
}

#navTop>a {
  padding: 0 14px 0 4px;
  color: #66757f;
}

#navTop a:hover {
  color: #009999;
}

.twittericon {
  margin-top: 8px;
}

#middlebar-inner.navbar-nav>li>a {
  padding: 0 15px 8px !important;
  font-size: 20px;
}

#middlebar-inner.navbar-nav li.nav-item.active>a>p.number {
  color: #FFFFFF !important;
}

i.glyphicon.glyphicon-home,
i.glyphicon.glyphicon-bell,
i.glyphicon.glyphicon-envelope {
  font-size: 20px;
}

.middlebar-right {
  margin-top: 15px;
  float: right;
}

img.twittericon {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

a {
  color: #009999;
  font-size: 14px;
}

.form-control {
  border-radius: 21px;
  border: 1px solid #e1e8ed;
  display: block;
  height: 32px;
  color: #8899a6;
  font-size: 13px;
  background-color: #f5f8fa;
  float: left;
  width: 221px;
}

h6 {
  text-transform: uppercase;
  color: #66757f;
  font-weight: 300;
  font-size: 13px;
}

.tweet {
  padding: 15px;
}

#tweets {
  display: block;
}

#tweets>nav {
  margin-bottom: -2;
  margin-top: 10px;
}

.thumbnail,
.thumbnail>img {
  border-radius: 8px;
  width: 200px;
  height: 200px;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  height: 46px;
  position: relative;
  width: 100%;
  background-color: white;
}

body {
  color: #292f33;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

#navDer {
  margin-top: 6px;
}

#navDer li,
#navDer form {
  display: inline;
  float: left;
  margin-right: 3px;
}

#global-nav-search {
  margin-bottom: 0;
  margin-top: 0;
}

.btn.btn-verde {
  background-color: #009999;
  color: #fff;
  padding: 0 13px 0 14px;
  text-align: center;
  height: 32px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.btn.btn-verde:focus,
.btn.btn-verde:hover {
  background: rgba(3, 133, 67, 0.8);
  background-color: #038543;
}

.tofollow {
  color: #66757f;
  font-size: 18px;
  font-weight: 300;
  margin-top: 10px;
}

.navbar-brand {
  color: #FFFFFF !important;
  font-weight: 300;
}

.navbar-brand.active {
  font-weight: 500;
  color: #292f33 !important;
}

.nav-link {
  color: #66757f;
  font-size: 13px;
  font-weight: 500;
}

.nav-link span>i {
  line-height: 1;
}

a:hover {
  color: #009999 !important;
  text-decoration: none;
}

#content {
  background-color: #F5F8FA;
}

#fotoback {
  width: 100%;
}

.autor {
  font-weight: bold;
  line-height: 1;
}

.autortwitter {
  color: #8899a6;
  font-weight: 300;
  font-size: 13px;
}

.iconautor {
  margin-right: 10px;
  float: left;
  width: 50px;
  height: 50px;
}

#follow {
  height: 28px;
  line-height: 0px;
}

.middlebar-right {
  text-align: right;
  display: inline-block;
}

p.number {
  color: #009999 !important;
  font-size: 20px !important;
  text-align: center !important;
  line-height: 0.5 !important;
}


/*# sourceMappingURL=custom.css.map */
</style>
<!--vlink-->

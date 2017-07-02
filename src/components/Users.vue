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
              <a href="#">Мой профиль</a>
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
        Лента
        <div class="row">
          <div class="col-sm-6 col-md-3 supp" style="background-color:grey;">Предложка</div>
          <div class="col-sm-6 col-md-6 feed" style="background-color:pink;">
            <div class="row">
              <div class="col-sm-3 col-md-3 col-lg-12">Твит 1</div>
              <div class="col-sm-3 col-md-3 col-lg-12">Твит 2</div>
              <div class="col-sm-3 col-md-3 col-lg-12">Твит 3</div>
              <div class="col-sm-3 col-md-3 col-lg-12">Твит 4</div>
            </div>
          </div>
          <div class="col-sm-6 col-md-3 filter" style="background-color:orange;">Фильтр</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      users_list: [
        {
          'name': 'Ainz',
          'message': 'Overlord'
        },
        {
          'name': 'Albedo',
          'message': 'General'
        }
      ]
    }
  }
}
</script>

<style>

</style>

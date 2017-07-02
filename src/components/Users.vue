<template>
  <div class="Users">
    <div class="container">
        <table class="table">
            <tr>
                <th>Name</th>
                <th>My thoughts</th>
            </tr>
            <tbody>
                <tr v-for="users in users_list">
                    <td>{{users.name}}</td>
                    <td>{{users.message}}</td>
                </tr>
            </tbody>
        </table>
        {{users_list}}
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
.container {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>

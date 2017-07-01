<template>
  <div class="Users">
    <div class="container">
        <table class="table">
            <tr>
                <th>Name</th>
                <th>Stat</th>
            </tr>
            <tbody>
                <tr v-for="users in users_list">
                    <td>{{users.name}}</td>
                    <td>{{users.status}}</td>
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
          'status': 'Overlord'
        },
        {
          'name': 'Albedo',
          'status': 'General'
        }
      ]
    }
  }
}
</script>

<style>

</style>

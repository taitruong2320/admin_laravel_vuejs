<template>
    <div class="container">
        <div class="container-fluid">
            <div class="row mt-5">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">User </h3>
                            <div class="card-tools">
                                <button class="btn btn-success" @click="newModal">Add new <i class="fa fa-user-plus fa-fw"></i></button>
                            </div>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body table-responsive p-0">
                            <table class="table table-hover text-nowrap">
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Type</th>
                                <th>Regitsed At</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="user in users" :key="user.id">
                                    <td>{{user.id}}</td>
                                    <td>{{user.name}}</td>
                                    <td>{{user.email}}</td>
                                    <td>{{user.type | upText}}</td>
                                    <td>{{user.created_at | myDate}}</td>
                                    <td>
                                        <a href="">
                                            <i class="fa fa-edit green"></i>
                                        </a>
                                        <a @click="deleteUser(user.id)">
                                            <i class="fa fa-trash red"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="addNew" tabindex="-1" aria-labelledby="addNewLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addNewLabel">Add New</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form @submit.prevent="createUser">
                        <div class="modal-body">
                            <div class="mb-3">
                                <!-- <label for="username" class="form-label">username</label> -->
                                <input id="name" v-model="form.name" placeholder="Name" type="text" name="name" class="form-control">
                                <HasError :form="form" field="name" />
                            </div>
                            <div class="mb-3">
                                <!-- <label for="username" class="form-label">username</label> -->
                                <input id="email" v-model="form.email" placeholder="Email Address" type="text" name="email" class="form-control">
                                <HasError :form="form" field="email" />
                            </div>
                            <div class="mb-3">
                                <!-- <label for="username" class="form-label">username</label> -->
                                <textarea id="bio" v-model="form.bio" placeholder="Short bio for user (Optional)" type="text" name="bio" class="form-control"></textarea>
                                <HasError :form="form" field="bio" />
                            </div>
                            <div class="mb-3">
                                <!-- <label for="username" class="form-label">username</label> -->
                                <select id="type" v-model="form.type" type="text" name="type" class="form-control">
                                    <option value="">Select User Role</option>
                                    <option value="admin">Admin</option>
                                    <option value="user">Standard</option>
                                    <option value="author">Author</option>
                                </select>
                                <HasError :form="form" field="type" />
                            </div>
                            <div class="mb-3">
                                <!-- <label for="username" class="form-label">username</label> -->
                                <input id="password" v-model="form.password" placeholder="Password" type="password" name="password" class="form-control">
                                <HasError :form="form" field="password" />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Add User</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      
        data() {
            return {
                users: {},
                form: new Form({
                    name: '',
                    email: '',
                    password: '',
                    type: '',
                    bio: '',
                    photo: ''
                })
            }
        },
        methods: {
            loadUsers() {
                axios.get('api/user')
                .then(({data})  => (this.users = data.data));
            },
            edit() {
                this.form.reset();
                $('#addNew').modal('show');
            },
            newModal() {
                this.form.reset();
                $('#addNew').modal('show');
            },
            createUser() {
                this.$Progress.start();
                this.form.post('api/user')
                .then(() => {
                    Fire.$emit('AfterCreate');
                    $('#addNew').modal('hide')
                    Toast.fire({
                        icon: 'success',
                        title: 'Created User in successfully'
                     })
                    this.$Progress.finish();
                })
                .catch(() => {

                })
               
            },
            deleteUser(id) {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete user!'
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        this.form.delete('api/user/' +id)
                        .then(() => {
                            Swal.fire(
                                'Deleted!',
                                'User has been deleted.',
                                'success'
                            ) 
                            Fire.$emit('AfterCreate');
                        })
                        .catch(() => {
                            
                        });
                    }
                })
            }
        },
        created() {
            this.loadUsers();
            Fire.$on('AfterCreate', () => {
                this.loadUsers();
            })
            // setInterval(() => this.loadUsers(), 3000);
        }
        
    }
</script>

<template>
    <div class="container">
        <div class="container-fluid">
            <div class="row mt-5">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">User </h3>
                            <div class="card-tools">
                                <button class="btn btn-success" data-toggle="modal" data-target="#addNew">Add new <i class="fa fa-user-plus fa-fw"></i></button>
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
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>183</td>
                                <td>John Doe</td>
                                <td>11-7-2014</td>
                                <td><span class="tag tag-success">Approved</span></td>
                                <td>
                                    <a href="">
                                        <i class="fa fa-edit green"></i>
                                    </a>
                                    <a href="">
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
                    <div class="modal-body">
                         <div class="mb-3">
                            <!-- <label for="username" class="form-label">username</label> -->
                            <input id="name" v-model="form.name" placeholder="Name" type="text" name="name" class="form-control">
                            <HasError :form="form" field="name" />
                        </div>
                        <div class="mb-3">
                            <!-- <label for="username" class="form-label">username</label> -->
                            <input id="name" v-model="form.email" placeholder="Email Address" type="text" name="email" class="form-control">
                            <HasError :form="form" field="email" />
                        </div>
                        <div class="mb-3">
                            <!-- <label for="username" class="form-label">username</label> -->
                            <textarea id="name" v-model="form.bio" placeholder="Bio" type="text" name="bio" class="form-control"></textarea>
                            <HasError :form="form" field="bio" />
                        </div>
                        <div class="mb-3">
                            <!-- <label for="username" class="form-label">username</label> -->
                            <input id="name" v-model="form.type" placeholder="type" type="text" name="type" class="form-control">
                            <HasError :form="form" field="type" />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Add</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      
        data() {
            return {
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
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<template>
    <div class="container">
        <div class="container-fluid">
            <div class="row mt-5">
            <div class="col-md-12">
                <div class="card">
                <div class="card-header">
                    <h3 class="card-title">User</h3>

                    <div class="card-tools">
                        button.btn
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
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        factory(App\User::class,15)->create();

        factory(App\Product::class,50)->create();

//        $this->call(UsersTableSeeder::class);
    }
}

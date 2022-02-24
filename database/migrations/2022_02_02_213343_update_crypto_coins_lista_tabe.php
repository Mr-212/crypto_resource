<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateCryptoCoinsListaTabe extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('crypto_coin_lists', function (Blueprint $table) {
            $table->string('AssetLaunchDate')->nullable()->change();
            $table->string('TotalCoinsMined')->nullable()->change();
            $table->string('CirculatingSupply')->nullable()->change();


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}

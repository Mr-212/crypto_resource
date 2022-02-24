<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCryptoCoinListsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('crypto_coin_lists', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('SortOrder')->nullable();
            $table->string('Name')->nullable();
            $table->string('Symbol')->nullable();
            $table->string('CoinName')->nullable();
            $table->string('FullName')->nullable();

            $table->text('Description')->nullable();

            $table->string('Url')->nullable();
            $table->string('ImageUrl')->nullable();
            $table->string('ContentCreatedOn')->nullable();

            $table->string('AssetTokenStatus')->nullable();
            $table->boolean('Sponsored')->nullable();

            $table->string('ProofType')->nullable();
            $table->json('Rating')->nullable();
            $table->json('Taxonomy')->nullable();

            $table->boolean('IsTrading')->nullable();
            $table->unsignedDouble('TotalCoinsMined')->nullable();
            $table->unsignedDouble('CirculatingSupply')->nullable();
            $table->unsignedInteger('BlockNumber')->nullable();
            $table->string('NetHashesPerSecond')->nullable();
            $table->unsignedInteger('BlockReward')->nullable();
            $table->unsignedDouble('BlockTime')->nullable();
            $table->date('AssetLaunchDate')->nullable();
            $table->string('AssetWhitepaperUrl')->nullable();
            $table->string('AssetWebsiteUrl')->nullable();
            $table->string('MaxSupply')->nullable();
            $table->bigInteger('MktCapPenalty')->nullable();
            $table->boolean('IsUsedInDefi')->nullable();
            $table->boolean('IsUsedInNft')->nullable();
            $table->string('PlatformType')->nullable();
            $table->unsignedBigInteger('DecimalPoints')->nullable();

            $table->string('Algorithm')->nullable();
            $table->string('AlgorithmType')->nullable();
            $table->string('Difficulty')->nullable();
            $table->json('response_json')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('crypto_coin_lists');
    }
}

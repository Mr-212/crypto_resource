<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CryptoCoinList extends Model
{
    use HasFactory;

    protected $fillable = ['Name','Symbol','CoinName','FullName','Url','ImageUrl','Description','AssetTokenStatus',
    'Algorithm','ProofType','Sponsored','Taxonomy','Rating','IsTrading','TotalCoinsMined','CirculatingSupply',
    'BlockNumber','NetHashesPerSecond','BlockReward','BlockTime','AssetLaunchDate','AssetWhitepaperUrl','AssetWebsiteUrl',
    'MaxSupply','MktCapPenalty','IsUsedInDefi','IsUsedInNft','PlatformType','DecimalPoints','AlgorithmType','Difficulty',
    'SortOrder','ContentCreatedOn', 'response_json',

];
}

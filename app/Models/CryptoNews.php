<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CryptoNews extends Model
{
    use HasFactory;
    protected $fillable = ['news_id','data'];


    protected $casts = [
        'data' => 'array'

    ];
}

<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $corsOrigins = [
            'http://localhost:3000'
        ];
        $requestOrigin = $request->headers->get('origin');
        
        // if(in_array($requestOrigin,$corsOrigins)){
            return $next($request)
            // ->header('Access-Control-Allow-Origin', $requestOrigin)
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            // ->header('Access-Control-Allow-Credentials', 'true')
            // ->header('Access-Control-Allow-Headers', 'Content-Type, X-Auth-Token, Origin, Authorization');
        // }

        return $next($request);
    }
}

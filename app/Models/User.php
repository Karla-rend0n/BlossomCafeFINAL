<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    protected $fillable =[
        'name', 
        'last_nameF', 
        'last_nameM',
        'email',
        'password ',
        'confirm_password', 
        'phone','age',
        'remember_token',
        'role_id',
        'gender_id'];

    protected $table = 'users';


    public function role(){
        return $this->belongsTo(Roles::class, 'id');
    }

    public function gender(){
        return $this->belongsTo(Genders::class, 'id');
    }
    public function sale(){
        return $this->hasMany(Sale::class, 'id');
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     
    protected $fillable = [
        'name',
        'email',
        'password',
    ];
*/
    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}

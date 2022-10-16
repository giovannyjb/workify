<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\LoginUserRequest;
use App\Http\Requests\User\RegisterUserRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }


    public function login(LoginUserRequest $request): JsonResponse
    {

        try {
            $user = User::where('email',$request->email)->first();
            if(!$user) return response()->json(["error"=>"User not exists!"])->setStatusCode(409);
            return response()->json(["results"=>$user]);
        }catch (\Exception $exception){
            return response()->json(["error"=>$exception->getMessage()]);
        }

    }

    public function register(RegisterUserRequest $request): JsonResponse{

        try {

            $user = User::where('email',$request->email)->first();
            if($user) return response()->json(["error"=>"User already exists!"])->setStatusCode(409);

            $user = User::create([
                'name'=>$request['name'],
                'email' => $request['email'],
                'password' => Hash::make($request['password'])
            ]);

            return response()->json(["results"=>$user])->setStatusCode(201);
        }catch (\Exception $exception){
            $data = $exception->getMessage();
            return response()->json($data)->setStatusCode(500);
        }
    }

    public function getUsers(Request $request):JsonResponse{

        try {
            $users = User::all();
            return response()->json(["results"=>$users]);
        }catch(\Exception $exception){
            return response()->json(["error:"=> $exception->getMessage()])->setStatusCode(500);
        }

    }
}



<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Doctor;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class DoctorsController extends Controller
{
    public function index()
    {
        return inertia('Admin/Doctors', [
            'doctors' => Doctor::paginate(10),
        ]);
    }

    public function insert(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'no_str' => ['required', 'unique:doctors'],
            'gender' => 'required',
            'address' => 'required',
            'hp' => 'required',
            'specialist' => 'required'
        ]);

        Doctor::create([
            'name' => $request->name,
            'no_str' => $request->no_str,
            'gender' => $request->gender,
            'address' => $request->address,
            'hp' => $request->hp,
            'specialist' => $request->specialist
        ]);
        return back();
    }

    public function update(Request $request)
    {
        $request->validate([
            'id' => 'required',
            'name' => 'required',
            'no_str' => 'required',
            'gender' => 'required',
            'address' => 'required',
            'hp' => 'required',
            'specialist' => 'required'
        ]);

        $no_str = Doctor::where('no_str', $request->no_str)->whereNotIn('id', [$request->id])->get();

        if (count($no_str) > 0) {
            throw ValidationException::withMessages([
                'duplicate' => 'NO STR sudah terdaftar'
            ]);
        } else {
            Doctor::where('id', $request->id)->update([
                'name' => $request->name,
                'no_str' => $request->no_str,
                'gender' => $request->gender,
                'address' => $request->address,
                'hp' => $request->hp,
                'specialist' => $request->specialist
            ]);
        }

        return back();
    }

    public function delete(Request $request)
    {
        Doctor::where('id', $request->id)->delete();
        return back();
    }
}

<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Patient;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class PatientsController extends Controller
{
    public function index()
    {
        return inertia('Admin/Patients', [
            'patients' => Patient::paginate(10),
        ]);
    }

    public function insert(Request $request)
    {
        $request->validate([
            'nik' => ['required', 'unique:patients'],
            'name' => 'required',
            'born_place' => 'required',
            'born_date' => 'required',
            'gender' => 'required',
            'address' => 'required',
            'hp' => 'required',
            'job' => 'required'
        ]);

        Patient::create([
            'nik' => $request->nik,
            'name' => $request->name,
            'born_place' => $request->born_place,
            'born_date' => $request->born_date,
            'gender' => $request->gender,
            'address' => $request->address,
            'hp' => $request->hp,
            'job' => $request->job,
        ]);

        return back();
    }

    public function update(Request $request)
    {
        $request->validate([
            'nik' => ['required', 'unique:patients'],
            'name' => 'required',
            'born_place' => 'required',
            'born_date' => 'required',
            'gender' => 'required',
            'address' => 'required',
            'hp' => 'required',
            'job' => 'required'
        ]);

        $nik = Patient::where('nik', $request->nik)->whereNotIn('nik', [$request])->get();

        if (count($nik) > 0) {
            throw ValidationException::withMessages([
                'duplicate' => 'NO NIK sudah terdaftar'
            ]);
        } else {
            Patient::where('id', $request->id)->update([
                'nik' => $request->nik,
                'name' => $request->name,
                'born_place' => $request->born_place,
                'born_date' => $request->born_date,
                'gender' => $request->gender,
                'address' => $request->address,
                'hp' => $request->hp,
                'job' => $request->job,
            ]);
        }

        return back();
    }
    public function delete(Request $request)
    {
        Patient::where('nik', $request->nik)->delete();
        return back();
    }
}

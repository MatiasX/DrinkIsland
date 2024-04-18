<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tipus;
use App\Models\Ital;
use Illuminate\Support\Facades\DB;

class TipusController extends Controller
{
    public function addTipus(Request $request){
        $request->validate([
            'ital_id' => ['required', 'unique:tipus'],
            'teli' => 'required',
            'nyari' => 'required',
            'edes' => 'required',
            'savanyu' => 'required',
            'keseru' => 'required',
            'alkoholos' => 'required',
            'alkoholmentes' => 'required'
        ]);
        $tipus=new Tipus;
        $tipus->ital_id=$request->input('ital_id');
        $tipus->teli=$request->input('teli');
        $tipus->nyari=$request->input('nyari');
        $tipus->edes=$request->input('edes');
        $tipus->savanyu=$request->input('savanyu');
        $tipus->keseru=$request->input('keseru');
        $tipus->alkoholos=$request->input('alkoholos');
        $tipus->alkoholmentes=$request->input('alkoholmentes');

        $tipus->save();
        return response()->json(['message'=>'Tipus sikeresen hozzáadva', 'data'=>$tipus], 201);
    }
    public function getTipusByItalId(Request $tipus){
        $current=Tipus::where("ital_id",$tipus->input('ital_id'))->first();
        return $current;
    }
    public function getTipusok(){
        $tipusok = DB::table('tipus')->get();
        return response()->json($tipusok);
    }
    public function modifyTipus(Request $request){
        $request->validate([
            'ital_id' => 'required',
            'teli' => 'required',
            'nyari' => 'required',
            'edes' => 'required',
            'savanyu' => 'required',
            'keseru' => 'required',
            'alkoholos' => 'required',
            'alkoholmentes' => 'required'
        ]);
        $id = $request->id;
        $tipus=Tipus::find($id);
        if (is_null($tipus)) {
            return response()->json(['message'=>'Hiba a bejövő paraméterekben. Nincs ilyen id-jű Típus.', 'id'=>$id], 202);
        }
        $tipus->teli=$request->input('teli');
        $tipus->nyari=$request->input('nyari');
        $tipus->edes=$request->input('edes');
        $tipus->savanyu=$request->input('savanyu');
        $tipus->keseru=$request->input('keseru');
        $tipus->alkoholos=$request->input('alkoholos');
        $tipus->alkoholmentes=$request->input('alkoholmentes');
        $tipus->save();
        return response()->json(['message'=>'Tipus sikeresen módosítva', 'data'=>$tipus], 201);
    }

    public function deleteTipus(Request $request){
        $id = $request->id;
        $tipus=Tipus::find($id);
        if (is_null($tipus)) {
            return response()->json(['message'=>'Hiba a bejövő paraméterekben. Nincs ilyen id-jű Típus.', 'id'=>$id], 202);
        }
        Tipus::destroy($tipus->id);
        return response()->json(['message'=>'Típus sikeresen törölve', 'data'=>$tipus], 201);
    }

    public function deleteTipusByItalId($request){
        $ital_id = $request->id;
        $tipus=Tipus::where("ital_id",$ital_id)->first();
        if (is_null($tipus)) {
            //return response()->json(['message'=>'Hiba a bejövő paraméterekben. Nincs ilyen id-jű Típus.', 'id'=>$ital_id], 202);
        }else{
            Tipus::destroy($tipus->id);
            return response()->json(['message'=>'Típus sikeresen törölve', 'data'=>$tipus->id], 201);
        }
    }

}

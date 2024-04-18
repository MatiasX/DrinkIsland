<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Alapanyag;
use App\Models\Ital;
use App\Models\Recept;
use App\Models\Tipus;
use App\Models\User;

class KoktelController extends Controller
{
    public function getKoktelok()
    {
        $receptek = DB::table('italok')
            ->select('italok.name AS Ital', DB::raw('CONCAT("{",GROUP_CONCAT(CONCAT("\"",alapanyagok.name, "\": \"", CONCAT(receptek.amount, " ", alapanyagok.unit),"\"")),"}") AS Recept'))
            ->join('receptek', 'italok.id', '=', 'receptek.ital_id')
            ->join('alapanyagok', 'receptek.alapanyag_id', '=', 'alapanyagok.id')
            ->groupBy('italok.name','italok.id')
            ->get();
        
        foreach($receptek as &$recept){
            $recept->Recept=json_decode($recept->Recept);
        }

        return response()->json($receptek);
    }

    public function searchKoktelokByName(Request $request)
    {
        $text=$request->name;
        $receptek = DB::table('italok')
            ->select('italok.name AS Ital', DB::raw('CONCAT("{",GROUP_CONCAT(CONCAT("\"",alapanyagok.name, "\": \"", CONCAT(receptek.amount, " ", alapanyagok.unit),"\"")),"}") AS Recept'))
            ->join('receptek', 'italok.id', '=', 'receptek.ital_id')
            ->join('alapanyagok', 'receptek.alapanyag_id', '=', 'alapanyagok.id')
            ->where('italok.name', 'like', "%$text%")
            ->groupBy('italok.name','italok.id')
            ->get();
        
        foreach($receptek as &$recept){
            $recept->Recept=json_decode($recept->Recept);
        }

        return response()->json($receptek);
    }

    public function getReceptByName(Request $italNeve)
    {
        $name=$italNeve->name;
        $recept = DB::table('italok')
            ->select('italok.name AS Ital', DB::raw('CONCAT("{",GROUP_CONCAT(CONCAT("\"",alapanyagok.name, "\": \"", CONCAT(receptek.amount, " ", alapanyagok.unit),"\"")),"}") AS Recept'))
            ->join('receptek', 'italok.id', '=', 'receptek.ital_id')
            ->join('alapanyagok', 'receptek.alapanyag_id', '=', 'alapanyagok.id')
            ->where('italok.name', $name)
            ->groupBy('italok.name','italok.id')
            ->get();
        
        $recept[0]->Recept=json_decode($recept[0]->Recept);

        return response()->json($recept);
    }

    public function getIngredientsByName($italNeve)
    {
        $name=$italNeve->name;
        $recept = DB::table('italok')
            ->select('italok.name AS Ital', DB::raw('CONCAT("{",GROUP_CONCAT(CONCAT("\"",alapanyagok.name, "\": \"", CONCAT(receptek.amount, " ", alapanyagok.unit),"\"")),"}") AS Recept'))
            ->join('receptek', 'italok.id', '=', 'receptek.ital_id')
            ->join('alapanyagok', 'receptek.alapanyag_id', '=', 'alapanyagok.id')
            ->where('italok.name', $name)
            ->groupBy('italok.name','italok.id')
            ->get();
        
        $recept[0]->Recept=json_decode($recept[0]->Recept);

        return response()->json($recept);
    }

    public function getTeli()
    {
        $receptek = DB::table('italok')
            ->select('italok.name AS Ital', DB::raw('CONCAT("{",GROUP_CONCAT(CONCAT("\"",alapanyagok.name, "\": \"", CONCAT(receptek.amount, " ", alapanyagok.unit),"\"")),"}") AS Recept'))
            ->join('receptek', 'italok.id', '=', 'receptek.ital_id')
            ->join('alapanyagok', 'receptek.alapanyag_id', '=', 'alapanyagok.id')
            ->join('tipus', 'italok.id', '=', 'tipus.ital_id')
            ->where('tipus.teli', 1)
            ->groupBy('italok.name','italok.id')
            ->get();
        
        foreach($receptek as &$recept){
            $recept->Recept=json_decode($recept->Recept);
        }

        return response()->json($receptek);
    }

    public function getNyari()
    {
        $receptek = DB::table('italok')
            ->select('italok.name AS Ital', DB::raw('CONCAT("{",GROUP_CONCAT(CONCAT("\"",alapanyagok.name, "\": \"", CONCAT(receptek.amount, " ", alapanyagok.unit),"\"")),"}") AS Recept'))
            ->join('receptek', 'italok.id', '=', 'receptek.ital_id')
            ->join('alapanyagok', 'receptek.alapanyag_id', '=', 'alapanyagok.id')
            ->join('tipus', 'italok.id', '=', 'tipus.ital_id')
            ->where('tipus.nyari', 1)
            ->groupBy('italok.name','italok.id')
            ->get();
        
        foreach($receptek as &$recept){
            $recept->Recept=json_decode($recept->Recept);
        }

        return response()->json($receptek);
    }

    public function getEdes()
    {
        $receptek = DB::table('italok')
            ->select('italok.name AS Ital', DB::raw('CONCAT("{",GROUP_CONCAT(CONCAT("\"",alapanyagok.name, "\": \"", CONCAT(receptek.amount, " ", alapanyagok.unit),"\"")),"}") AS Recept'))
            ->join('receptek', 'italok.id', '=', 'receptek.ital_id')
            ->join('alapanyagok', 'receptek.alapanyag_id', '=', 'alapanyagok.id')
            ->join('tipus', 'italok.id', '=', 'tipus.ital_id')
            ->where('tipus.edes', 1)
            ->groupBy('italok.name','italok.id')
            ->get();
        
        foreach($receptek as &$recept){
            $recept->Recept=json_decode($recept->Recept);
        }

        return response()->json($receptek);
    }

    public function getSavanyu()
    {
        $receptek = DB::table('italok')
            ->select('italok.name AS Ital', DB::raw('CONCAT("{",GROUP_CONCAT(CONCAT("\"",alapanyagok.name, "\": \"", CONCAT(receptek.amount, " ", alapanyagok.unit),"\"")),"}") AS Recept'))
            ->join('receptek', 'italok.id', '=', 'receptek.ital_id')
            ->join('alapanyagok', 'receptek.alapanyag_id', '=', 'alapanyagok.id')
            ->join('tipus', 'italok.id', '=', 'tipus.ital_id')
            ->where('tipus.savanyu', 1)
            ->groupBy('italok.name','italok.id')
            ->get();
        
        foreach($receptek as &$recept){
            $recept->Recept=json_decode($recept->Recept);
        }

        return response()->json($receptek);
    }

    public function getKeseru()
    {
        $receptek = DB::table('italok')
            ->select('italok.name AS Ital', DB::raw('CONCAT("{",GROUP_CONCAT(CONCAT("\"",alapanyagok.name, "\": \"", CONCAT(receptek.amount, " ", alapanyagok.unit),"\"")),"}") AS Recept'))
            ->join('receptek', 'italok.id', '=', 'receptek.ital_id')
            ->join('alapanyagok', 'receptek.alapanyag_id', '=', 'alapanyagok.id')
            ->join('tipus', 'italok.id', '=', 'tipus.ital_id')
            ->where('tipus.keseru', 1)
            ->groupBy('italok.name','italok.id')
            ->get();
        
        foreach($receptek as &$recept){
            $recept->Recept=json_decode($recept->Recept);
        }

        return response()->json($receptek);
    }

    public function getAlkoholos()
    {
        $receptek = DB::table('italok')
            ->select('italok.name AS Ital', DB::raw('CONCAT("{",GROUP_CONCAT(CONCAT("\"",alapanyagok.name, "\": \"", CONCAT(receptek.amount, " ", alapanyagok.unit),"\"")),"}") AS Recept'))
            ->join('receptek', 'italok.id', '=', 'receptek.ital_id')
            ->join('alapanyagok', 'receptek.alapanyag_id', '=', 'alapanyagok.id')
            ->join('tipus', 'italok.id', '=', 'tipus.ital_id')
            ->where('tipus.alkoholos', 1)
            ->groupBy('italok.name','italok.id')
            ->get();
        
        foreach($receptek as &$recept){
            $recept->Recept=json_decode($recept->Recept);
        }

        return response()->json($receptek);
    }

    public function getAlkoholmentes()
    {
        $receptek = DB::table('italok')
            ->select('italok.name AS Ital', DB::raw('CONCAT("{",GROUP_CONCAT(CONCAT("\"",alapanyagok.name, "\": \"", CONCAT(receptek.amount, " ", alapanyagok.unit),"\"")),"}") AS Recept'))
            ->join('receptek', 'italok.id', '=', 'receptek.ital_id')
            ->join('alapanyagok', 'receptek.alapanyag_id', '=', 'alapanyagok.id')
            ->join('tipus', 'italok.id', '=', 'tipus.ital_id')
            ->where('tipus.alkoholmentes', 1)
            ->groupBy('italok.name','italok.id')
            ->get();
        
        foreach($receptek as &$recept){
            $recept->Recept=json_decode($recept->Recept);
        }

        return response()->json($receptek);
    }
}

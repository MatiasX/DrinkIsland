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
    public function getReceptek()
    {
        $receptek = DB::table('italok')
            ->select('italok.name AS Ital', DB::raw('CONCAT("{",GROUP_CONCAT(CONCAT("\"",alapanyagok.name, "\": \"", receptek.amount,"\"")),"}") AS Recept'))
            ->join('receptek', 'italok.id', '=', 'receptek.italok_id')
            ->join('alapanyagok', 'receptek.alapanyag_id', '=', 'alapanyagok.id')
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
            ->select('italok.name AS Ital', DB::raw('CONCAT("{",GROUP_CONCAT(CONCAT("\"",alapanyagok.name, "\": \"", receptek.amount,"\"")),"}") AS Recept'))
            ->join('receptek', 'italok.id', '=', 'receptek.italok_id')
            ->join('alapanyagok', 'receptek.alapanyag_id', '=', 'alapanyagok.id')
            ->where('italok.name', $name)
            ->groupBy('italok.name','italok.id')
            ->get();
        
        $recept[0]->Recept=json_decode($recept[0]->Recept);

        return response()->json($recept);
    }
}

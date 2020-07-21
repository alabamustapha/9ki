// Importing JavaScript
//
// You have two choices for including Bootstrap's JS files—the whole thing,
// or just the bits that you need.


// Option 1
//
// Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)
// import "../../node_modules/jquery/dist/jquery.min.js";



// Option 2
//
// Import just what we need

// If you're importing tooltips or popovers, be sure to include our Popper.js dependency
// import "../../node_modules/popper.js/dist/popper.min.js";
// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

// import "../../node_modules/bootstrap/js/dist/util.js";
// import "../../node_modules/bootstrap/js/dist/modal.js";
// import "../../node_modules/bootstrap/js/dist/collapse.js";




$(document).ready(function(){

    $('#forpaidreport').on('click', ()=>{

        if($('#forpaidreport').prop('checked') == true){
            $('#collapsePaidreport').collapse('show');
        }else{
            $('#collapsePaidreport').collapse('hide');

        }

    })

})

let childEnergyTable = [
    [8,7,6,5,4,3,2,1,9,8,7,6], // 1,4,7
    [5,1,9,8,7,6,5,4,3,2,1,9], // 2,5,8
    [2,4,3,2,1,9,8,7,6,5,4,3]  // 3,6,9
];

let resolutionEnergyTable = ["445", "499", "421", "941", "995", "928", "248", "297", "225", "436", "454", "472", "937", "959", "977", "234", "252", "279", "481", "418", "463", "986", "914", "966", "288", "216", "261", "344", "398", "326", "546", "591", "528", "748", "753", "721", "335", "353", "371", "537", "555", "573", "739", "757", "775", "389", "317", "362", "582", "519", "568", "784", "712", "766", "849", "894", "822", "142", "196", "124", "647", "692", "629", "831", "858", "876", "133", "151", "178", "638", "656", "674", "885", "813", "867", "187", "115", "169", "683", "611", "665"];    

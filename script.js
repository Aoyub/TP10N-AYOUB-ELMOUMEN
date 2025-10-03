function somme()
{

    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) + Number(b);
    document.getElementById("t3").value = c;

}

function diff()
{

    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) - Number(b);
    document.getElementById("t3").value = c;

}

function produit()
{

    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) * Number(b);
    document.getElementById("t3").value = c;

}

function reste()
{

    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) / Number(b);
    document.getElementById("t3").value = c;

    if (document.getElementById("t1").value == 0) {
    document.getElementById("t3").value = "Erreur, division par 0";}

    if (document.getElementById("t2").value == 0) {
    document.getElementById("t3").value = "Erreur, division par 0";} 
}

function parite()
{
    if (document.getElementById("t3").value %2== 0) {
    document.getElementById("t4").value = "Pair";}

    else{
    document.getElementById("t4").value = "Impair";}

}


function permute()
{
    [document.getElementById("t1").value, document.getElementById("t2").value] = [document.getElementById("t2").value, document.getElementById("t1").value];   
}



function del()
{
    document.getElementById("t1").value = ''
    document.getElementById("t2").value = ''
    document.getElementById("t3").value = ''
    document.getElementById("t4").value = ''


}

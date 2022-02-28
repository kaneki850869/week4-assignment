var profiles =  new Array();
profiles[0] = "Sandeep";
profiles[1] = "Jhonnybhai";
profiles[2] = "kaizoku";
profiles[3] = "Joe";
profiles[4] = "Nanbugansaku";
profiles[5] = "jimmy";
profiles[6] = "Kaneki";
profiles[7] = "John";
profiles[8] = "Fujimaki";
profiles[9] = "jatinder";

for (let i = 0; i < profiles.length; i++) {
    if (profiles[i].charAt()=='J'|| profiles[i].charAt()=='j') {
        console.log("Goodbye"+" "+ profiles[i])     
    }
    else{
        console.log("Hello"+" "+ profiles[i])
    }
}
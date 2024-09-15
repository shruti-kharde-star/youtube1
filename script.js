var videos=
[
{
    img:"assets/tom\ and\ jerry.jpg",
    profile:"assets/channels4_profile (3).jpg",
    title:"Monsoon Magic in Dholakpur",
    creater:"Jungle Beats",
    views:"1.4M views",
    timing:"1 year ago",
},
{
    img:"assets/motu\ patlu.jpg",
    profile:"assets/channels4_profile (4).jpg",
    title:" Tom & Jerry |A Bit Fresh Air",
    creater:"Jungle Beats",
    views:"409M views",
    timing:"2 year ago",
},
{
    img:"assets/oggy\ and\ cockroaches.jpg",
    profile:"assets/channels4_profile (5).jpg",
    title:"Non Stop Motu-Patlu | Motu Patlu ",
    creater:"Jungle Beats",
    views:"38M views",
    timing:"3 months ago",
},
{
    img:"assets/south\ movie.jpg",
    profile:"assets/channels4_profile (5).jpg",
    title:"Hindi Oggy and the Cockroaches ",
    creater:"Jungle Beats",
    views:"32M views",
    timing:"3 year ago",
},
{
    img:"assets/taarak\ mehata.jpg",
    profile:"assets/unnamed.jpg",
    title:"South Superhit Thrillers Movie Forensic ",
    creater:"Jungle Beats",
    views:"9.6M views",
    timing:"1 year ago",
},
{
    img:"assets/oggy\ and\ cockroaches.jpg",
    profile:"assets/channels4_profile (5).jpg",
    title:"Non Stop Motu-Patlu | Motu Patlu ",
    creater:"Jungle Beats",
    views:"38M views",
    timing:"3 months ago",
},
{
    img:"assets/south\ movie.jpg",
    profile:"assets/channels4_profile (5).jpg",
    title:"Hindi Oggy and the Cockroaches ",
    creater:"Jungle Beats",
    views:"32M views",
    timing:"3 year ago",
},
{
    img:"assets/taarak\ mehata.jpg",
    profile:"assets/unnamed.jpg",
    title:"South Superhit Thrillers Movie Forensic ",
    creater:"Jungle Beats",
    views:"9.6M views",
    timing:"1 year ago",
},{
    img:"assets/tom\ and\ jerry.jpg",
    profile:"assets/channels4_profile (3).jpg",
    title:"Monsoon Magic in Dholakpur",
    creater:"Jungle Beats",
    views:"1.4M views",
    timing:"1 year ago",
},
{
    img:"assets/motu\ patlu.jpg",
    profile:"assets/channels4_profile (4).jpg",
    title:" Tom & Jerry |A Bit Fresh Air",
    creater:"Jungle Beats",
    views:"409M views",
    timing:"2 year ago",
},
{
    img:"assets/oggy\ and\ cockroaches.jpg",
    profile:"assets/channels4_profile (5).jpg",
    title:"Non Stop Motu-Patlu | Motu Patlu ",
    creater:"Jungle Beats",
    views:"38M views",
    timing:"3 months ago",
},
{
    img:"assets/south\ movie.jpg",
    profile:"assets/channels4_profile (5).jpg",
    title:"Hindi Oggy and the Cockroaches ",
    creater:"Jungle Beats",
    views:"32M views",
    timing:"3 year ago",
},
{
    img:"assets/taarak\ mehata.jpg",
    profile:"assets/unnamed.jpg",
    title:"South Superhit Thrillers Movie Forensic ",
    creater:"Jungle Beats",
    views:"9.6M views",
    timing:"1 year ago",
},
{
    img:"assets/oggy\ and\ cockroaches.jpg",
    profile:"assets/channels4_profile (5).jpg",
    title:"Non Stop Motu-Patlu | Motu Patlu ",
    creater:"Jungle Beats",
    views:"38M views",
    timing:"3 months ago",
},
{
    img:"assets/south\ movie.jpg",
    profile:"assets/channels4_profile (5).jpg",
    title:"Hindi Oggy and the Cockroaches ",
    creater:"Jungle Beats",
    views:"32M views",
    timing:"3 year ago",
},
{
    img:"assets/taarak\ mehata.jpg",
    profile:"assets/unnamed.jpg",
    title:"South Superhit Thrillers Movie Forensic ",
    creater:"Jungle Beats",
    views:"9.6M views",
    timing:"1 year ago",
}
]



videos.forEach(
    video =>{
        var main=document.getElementById("main");

        var box=document.createElement("div");
        box.className="box";


        var top_box=document.createElement("div");
        top_box.className="top-box";


        top_box.appendChild(box);

        var img=document.createElement("div");
        img.className="img"

        var image=document.createElement("img");
        image.src=video.img;

        img.appendChild(image);


        box.appendChild(img);


        var text=document.createElement("div");
        text.className="text";

        box.appendChild(text);


        var left=document.createElement("div");
        left.className="left";

        var img1=document.createElement("img");
        img1.src=video.profile;
        left.appendChild(img1);

        text.appendChild(left);


        var mid=document.createElement("div");
        mid.className="mid";

        var h3=document.createElement("h3");
        h3.textContent=video.title;

        mid.appendChild(h3);

        var h4=document.createElement("h4");
        h4.textContent=video.creater;

        mid.appendChild(h4);

        var icon=document.createElement("i");
        icon.className="ri-checkbox-circle-fill";

        var h5=document.createElement("h5");
        h5.textContent=video.views;

        h4.appendChild(icon);

        mid.appendChild(h5);

        var h=document.createElement("h5");
        h.textContent=video.timing;

        mid.appendChild(h);
        text.appendChild(mid);


        var right=document.createElement("div");
        right.className="right";

        var i=document.createElement("i");
        i.className="ri-more-2-line";
        right.appendChild(i);

        text.appendChild(right);


        main.appendChild(top_box);
    }
)


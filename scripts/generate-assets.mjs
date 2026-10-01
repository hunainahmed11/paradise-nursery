import { mkdirSync, writeFileSync } from 'node:fs';
const dir = 'public/images';
mkdirSync(dir, { recursive: true });
const ids = ['snake-plant','zz-plant','golden-pothos','spider-plant','jade-plant','aloe-vera','monstera','fiddle-leaf','rubber-plant','bird-of-paradise','areca-palm','philodendron','peperomia','pilea','haworthia','fittonia','boston-fern','echeveria'];
function plant(i) {
 const colors = ['#3c6941','#557348','#748848','#305d42'];
 let leaves = '';
 for(let n=0;n<11;n++){
  const angle = -76 + n*15 + (i%3)*3;
  const length = 72 + ((n*31+i*13)%80);
  const width = [0,3,5,14].includes(i)?10:[4,12,13].includes(i)?25:33;
  const x = 180 + Math.sin(angle*Math.PI/180)*length*.55;
  const y = 235 - Math.cos(angle*Math.PI/180)*length;
  leaves += '<path d="M180 267 Q'+(180+Math.sin(angle)*20)+' 196 '+x+' '+y+'" stroke="#526544" stroke-width="3" fill="none"/>';
  leaves += '<g transform="translate('+x+' '+y+') rotate('+angle+')"><path d="M0 20 C-'+width+' 3 -'+width+' -'+(length*.5)+' 0 -'+(length*.65)+' C'+width+' -'+(length*.5)+' '+width+' 3 0 20" fill="'+colors[(i+n)%4]+'"/><path d="M0 16 V-'+(length*.55)+'" stroke="#adc18a" stroke-opacity=".5" fill="none"/>';
  if([0,14,15].includes(i)) for(let k=0;k<4;k++) leaves += '<path d="M-'+width*.55+' -'+k*10+' L0 -'+(k*10+7)+' L'+width*.55+' -'+k*10+'" stroke="#c4d0a0" stroke-opacity=".7" fill="none"/>';
  leaves += '</g>';
 }
 return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 360"><defs><linearGradient id="pot"><stop stop-color="#b87c5d"/><stop offset=".5" stop-color="#d7a183"/><stop offset="1" stop-color="#ac7255"/></linearGradient></defs><rect width="360" height="360" fill="'+['#edf0e7','#e9ede4','#f0ede4'][i%3]+'"/><ellipse cx="180" cy="325" rx="75" ry="10" fill="#213c22" opacity=".1"/>'+leaves+'<path d="M132 254 H228 L217 318 Q180 332 143 318Z" fill="url(#pot)"/><ellipse cx="180" cy="255" rx="48" ry="10" fill="#9a6246"/><ellipse cx="180" cy="254" rx="40" ry="6" fill="#473d2c"/><path d="M132 255 Q180 271 228 255 V265 Q180 281 132 265Z" fill="#d5a083"/></svg>';
}
ids.forEach((id,i)=>writeFileSync(dir+'/'+id+'.svg',plant(i)));
let foliage='';
for(let i=0;i<40;i++){
 const x=640+(i*137)%900,y=130+(i*89)%650;
 foliage+='<path d="M'+(x+30)+' 850 Q'+(x-50)+' '+y+' '+x+' '+(y-110)+'" stroke="#496846" stroke-width="5" fill="none"/><ellipse cx="'+x+'" cy="'+y+'" rx="'+(30+i%5*13)+'" ry="'+(75+i%4*15)+'" transform="rotate('+(-60+i*19%120)+' '+x+' '+y+')" fill="'+['#264b36','#365b3d','#52734b','#6e8554','#1e402f'][i%5]+'"/>';
}
writeFileSync(dir+'/greenhouse.svg','<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 850"><defs><linearGradient id="bg"><stop stop-color="#2b4836"/><stop offset="1" stop-color="#a5b291"/></linearGradient></defs><rect width="1500" height="850" fill="url(#bg)"/><path d="M740 0V850M1100 0V850M1460 0V850M600 240H1500M600 510H1500" stroke="#d3d9bd" stroke-width="12" opacity=".18"/><circle cx="1120" cy="120" r="180" fill="#eee9bf" opacity=".13"/>'+foliage+'<path d="M1120 680H1370L1335 850H1155Z" fill="#ad896d"/><path d="M690 730H850L826 850H714Z" fill="#c0ac88"/></svg>');

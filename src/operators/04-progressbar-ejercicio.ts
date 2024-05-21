import { fromEvent, map } from "rxjs";

const divText = document.createElement('div');
const progressBar = document.createElement('div');
const body = document.querySelector('body');
divText.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat convallis imperdiet. Curabitur nisi elit, convallis ut varius vitae, tincidunt sed sem. Sed pretium, massa vel dictum luctus, turpis nibh ultrices nunc, in dapibus eros felis ut lorem. Sed a gravida nunc. Nullam sit amet dui sem. Sed finibus, mauris in mollis sollicitudin, erat purus posuere nulla, sit amet ornare mauris lacus ac nisl. In volutpat tincidunt tortor at efficitur. Pellentesque interdum eleifend ante ut consequat. Sed placerat nulla et enim mollis, ac interdum libero pulvinar. Integer sed tellus non ex viverra congue ut sit amet neque. Cras pulvinar nisi quis luctus congue. In urna metus, pharetra eget lorem eu, dapibus bibendum nisl. Aliquam feugiat ante est, non vulputate eros mattis vitae. Nam eget sagittis mauris. Curabitur quis velit ultrices, euismod justo eu, molestie mauris.
<br/><br/>
Integer sit amet lectus nec nulla feugiat imperdiet. Ut vulputate nunc nibh. Sed vel felis facilisis, ornare turpis ut, blandit erat. Vestibulum sed mattis urna, a accumsan mauris. Sed ut nulla finibus, fringilla nisi ullamcorper, mollis magna. Aenean aliquam arcu in varius tristique. Quisque a urna eget ex aliquam fermentum. Aenean eleifend lacus vitae pellentesque placerat. Ut non ullamcorper turpis, non posuere felis. Cras ullamcorper dui vel nibh elementum semper. Duis quis cursus dolor, nec rutrum velit. In venenatis, leo ut suscipit pretium, massa dui vehicula ligula, sed commodo massa sapien a sem. Duis facilisis consequat iaculis.
<br/><br/>
Cras id ante diam. Nullam sagittis felis quis nibh luctus, at egestas eros mattis. Curabitur molestie nisl ac elementum posuere. Maecenas ornare interdum massa at eleifend. Maecenas at arcu justo. Donec ac laoreet odio, id maximus nisi. Sed blandit, neque eget efficitur egestas, diam diam facilisis ligula, eget dignissim nulla sapien venenatis enim.
<br/>
<br/>
Praesent pulvinar consequat libero ac venenatis. Phasellus blandit nec felis sed blandit. Vestibulum lorem sapien, placerat eu vestibulum a, ultricies eu erat. Aliquam tempor lacinia nisi, eu rutrum leo eleifend quis. Sed auctor sed dolor in lacinia. Maecenas congue, tellus at maximus tincidunt, risus tellus egestas ex, ut varius sapien ipsum non leo. Aliquam faucibus, augue vel facilisis consectetur, tellus quam feugiat nisl, non ornare lorem elit a arcu. Ut ultricies, tellus ac aliquet finibus, felis ex mollis metus, vel suscipit tellus justo eu arcu. Nunc nec nisl ac risus sollicitudin cursus vitae sed justo. Phasellus at diam eleifend, eleifend diam et, ultricies felis. Quisque in risus rutrum, tincidunt turpis vel, ornare est. Curabitur venenatis congue elit sit amet gravida. Nulla tempus nibh ipsum, eu volutpat arcu vehicula id. Donec accumsan, quam at pellentesque tincidunt, purus nisl tempor leo, eget pulvinar metus urna id nibh.
<br/><br/>
Duis vel lectus euismod, venenatis arcu vitae, faucibus quam. Fusce laoreet porta congue. Ut at ullamcorper nisi. Donec euismod tortor vel sem volutpat fermentum. In hac habitasse platea dictumst. Curabitur volutpat eros in nulla iaculis bibendum. In hac habitasse platea dictumst. Praesent consequat tristique libero, non feugiat tortor vehicula quis.
`;
body.append(divText);
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

const percentCalculateByEvent = (event) => {
    const {clientHeight, scrollHeight, scrollTop } = event.target.documentElement;
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

const event$ = fromEvent(document, 'scroll');


const pregressBar$ = event$.pipe(
    map(percentCalculateByEvent)
)


pregressBar$.subscribe( percent => {
    progressBar.style.width = `${percent}%`
} );

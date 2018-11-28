import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-news-page',
    templateUrl: './news-page.component.html',
    styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
    root: string ="Notícias";
    news ={
	image: "https://www.nobuhotels.com/uploads/9/8/6/9/98696408/16-9placeholder_299.png",
	title: "Lançamento oficial do MediaWeek IX",
	tag: {
	    id: 0,
	    label: "MediaWeek"
	},
	headline: "O MediaWeek IX já tem data marcada! Veja o que esperar.",
	author: {
	    photo: "https://content-static.upwork.com/uploads/2014/10/02123010/profilephoto_goodcrop.jpg",
	    name: "Çeqüella"
	},
	content: "\
<p> \
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non diam leo. Sed ultrices, ligula sed mattis volutpat, massa metus blandit ex, in eleifend ante nibh eu urna. Maecenas purus neque, euismod nec accumsan at, scelerisque ut urna. Nam egestas sodales urna in elementum. Aenean et dui scelerisque, porttitor sem in, lacinia ex. Etiam magna nulla, pharetra ac condimentum id, ornare ac risus. Morbi non turpis ligula. Fusce quis magna vitae arcu elementum ornare. Nam ultricies in velit sit amet semper. Cras posuere enim enim, at facilisis metus porta nec. Ut eget urna et ligula lobortis vehicula. Sed ac est ut odio condimentum mattis. Curabitur non feugiat erat. Etiam ultricies placerat libero, et mollis felis tincidunt quis. Donec luctus ac sapien ac tempor. \
</p> \
<p> \
In hac habitasse platea dictumst. Fusce arcu orci, posuere quis eros vitae, sagittis hendrerit augue. Donec ac metus finibus, suscipit tortor scelerisque, semper eros. In lacinia mi non interdum cursus. Duis ultricies lorem quis metus tincidunt, sed euismod lorem convallis. Donec tempus magna felis, sed placerat nisi sollicitudin fringilla. Fusce vel lobortis mauris. Praesent finibus libero tristique, placerat nisi nec, congue dui. Cras magna sapien, tincidunt tincidunt pellentesque vel, congue condimentum nunc. Nam mattis vulputate lacinia. Fusce aliquet sit amet leo eget ultricies. In porttitor velit sit amet elit sagittis sagittis. Ut accumsan pharetra porta. Curabitur sollicitudin lacus at odio pretium congue. Nulla ac enim eleifend, auctor odio sed, rutrum orci. \
</p> \
<p> \
Nulla at magna ante. Maecenas congue quis magna non posuere. Duis malesuada neque eget tortor cursus condimentum. Donec mi est, interdum vel nulla sed, condimentum bibendum risus. Pellentesque posuere velit ipsum. Praesent quis dolor ut nunc mattis molestie ac at turpis. Aenean risus odio, laoreet ut cursus id, pulvinar ut sem. Ut sed lacinia odio. \
</p>"
    };

    constructor() { }

    ngOnInit() {
    }

}

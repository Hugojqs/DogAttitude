// API Random User - Testimonial (Dommage pas de génération de texte aléatoire)
lorem = {
    1: "J'ai eu affaire à la nouvelle gérante du salon Dog Attitude situé à Saint-Egrève. En effet j'ai amené mon chat et la gérante s'est occupée impeccablement de mon animal. Je recommande cet endroit qui est propre et où la gérante est respectueuse, souriante & rapide. Merci encore et j'y retournerai",
    0: "Trés bon salon repris par une jeune dame douce et pleine de conseils. Dans ce salon on aime les animaux et ca ce voit. Ma bichoko etait ravie. Je conseils et reviendrais!",
    2: "Excellent je conseille La dame est très professionnelle",
}

$.ajax({
    url: "https://randomuser.me/api/?results=3",
    dataType: 'json',
    success: function(users) {
        $(users.results).each(function(index, user) {
            console.log(user)
            $(".custom-testimonial > div:nth-child("+ (index+1) +") div.card-header img").attr('src', user.picture.large);
            $(".custom-testimonial > div:nth-child("+ (index+1) +") div.card-body h6.card-title").html(user.name.first + ' ' + user.name.last.toUpperCase());
            $(".custom-testimonial > div:nth-child("+ (index+1) +") div.card-body p.card-description").html(lorem[index]);
        })

    },
});
  
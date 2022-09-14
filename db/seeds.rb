puts "seeding..."

Comment.destroy_all
Like.destroy_all
Review.destroy_all
User.destroy_all
Game.destroy_all

User.reset_pk_sequence
Review.reset_pk_sequence
Like.reset_pk_sequence
Game.reset_pk_sequence
Comment.reset_pk_sequence

3.times do
    User.create(username: Faker::Internet.email, password: 'password')
end

10.times do
    Game.create(title: Faker::Game.title, genre: Faker::Game.genre, platform: Faker::Game.platform, image_url: "https://cdn.shopify.com/s/files/1/0129/7698/0032/products/min-video-game-sample-pack_940x1530.png?v=1628541839")
end

30.times do
    Review.create(content: Faker::Hipster.sentence, rating: rand(1..5), completed: [true, false].sample, user_id: rand(1..3), game_id: rand(1..10))
end

20.times do
    Comment.create(review_id: rand(1..30), user_id: rand(1..3), comment_body: Faker::Company.bs)
end

20.times do
    Like.create(review_id: rand(1..30), user_id: rand(1..3))
end

puts "done seeding!"
puts "clearing database..."

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

puts "seeding users"

Andrea = User.create(username: "AndreaRose", password: "password", avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQFbPdY0CapyEw/profile-displayphoto-shrink_200_200/0/1658856079190?e=1668643200&v=beta&t=WFJqThdN8zt1d2Zd21cGQkmClRaQPZA21sgaXPJ8Bbs", admin: true)
Victor = User.create(username: "VictorHaynes", password: "password", avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQHd61yBh5zEJg/profile-displayphoto-shrink_200_200/0/1533918223115?e=1668643200&v=beta&t=yT5i5eGE6Zymqo4S9wgrCMAK00ibuUsdmvxp-oy-nbg", admin: true)
Sean = User.create(username: "ohsean812", password: "password", avatar: "https://media-exp1.licdn.com/dms/image/C5603AQHn-mhBaohSCg/profile-displayphoto-shrink_200_200/0/1651108282342?e=1668643200&v=beta&t=sRnVHywnL5BoYsruNmsN1r9poI9PfB4-Kn2IvDNtWlc", admin: true)
Adam = User.create(username: "AdamLaRosa", password: "password", avatar: "https://media-exp1.licdn.com/dms/image/C5603AQE-FflsVX3HzA/profile-displayphoto-shrink_800_800/0/1596080670926?e=1668643200&v=beta&t=-ZeD00VDhu7uGZvT5Rgpi04yvAHygY-a06YrjcZxAmc", admin: 0)
Austin = User.create(username: "AustinPawers", password: "password", avatar: "https://64.media.tumblr.com/2c73bd4c42e4907bcc92154ded06e862/5f5a4c3002fc166d-11/s400x600/6c0e18d3aa5eed095bf5c44c26fda470c6f6940c.jpg", admin: 0)
Diana = User.create(username: "DianaPawPrints", password: "password", avatar: "https://64.media.tumblr.com/28f27f1e0a02c85c130c7831f9fa6064/5f5a4c3002fc166d-b4/s400x600/059902dffd443584b4789aa64d04c81fd5e512f2.jpg", admin: 0)

puts "seeding games"

# Smash = Game.create(title: "Super Smash Bros. Melee", genre: "Fighter", platform: "Nintendo GameCube", image_url: "https://upload.wikimedia.org/wikipedia/en/7/75/Super_Smash_Bros_Melee_box_art.png")
# BotW = Game.create(title: "The Legend of Zelda: Breath of the Wild", genre: "Action/Adventure", platform: "Nintendo Switch", image_url: "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg")
# FF7 = Game.create(title: "Final Fantasy 7 Remake", genre: "JRPG", platform: "PS4/PS5", image_url: "https://upload.wikimedia.org/wikipedia/en/c/ce/FFVIIRemake.png")
# Halo = Game.create(title: "Halo Infinite", genre: "FPS", platform: "Xbox One/Series X, PC", image_url: "https://upload.wikimedia.org/wikipedia/en/1/14/Halo_Infinite.png")
# Crash = Game.create(title: "Crash Bandicoot N. Sane Trilogy", genre: "Platform", platform: "PS4, Xbox One, PC", image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/d/de/Crash_Bandicoot_N._Sane_Trilogy_cover_art.jpg/220px-Crash_Bandicoot_N._Sane_Trilogy_cover_art.jpg")
# Mario = Game.create(title: "Super Mario Odyssey", genre: "Platform", platform: "Nintendo Switch", image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Super_Mario_Odyssey.jpg/220px-Super_Mario_Odyssey.jpg")
# RE8 = Game.create(title: "Resident Evil Village", genre: "Survival Horror", platform: "PS4/PS5, Xbox One/Series X, PC", image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Resident_Evil_Village.png/220px-Resident_Evil_Village.png")
# TLOU2 = Game.create(title: "The Last of Us Part II", genre: "Action/Adventure", platform: "PS4", image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/TLOU_P2_Box_Art_2.png/220px-TLOU_P2_Box_Art_2.png")
# ER = Game.create(title: "Elden Ring", genre: "Action RPG", platform: "PS4/PS5, Xbox One/Series X, PC", image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Elden_Ring_Box_art.jpg/220px-Elden_Ring_Box_art.jpg")
# Forza = Game.create(title: "Forza Horizon 5", genre: "Racing", platform: "Xbox One/Series X, PC", image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Forza_Horizon_5_cover_art.jpg/220px-Forza_Horizon_5_cover_art.jpg")
# SV = Game.create(title: "Stardew Valley", genre: "Farming Sim", platform: "PS4, Xbox One, Switch, PC, Mobile", image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Logo_of_Stardew_Valley.png/220px-Logo_of_Stardew_Valley.png")
# MC = Game.create(title: "Minecraft", genre: "Survival", platform: "PC", image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Minecraft_cover.png/220px-Minecraft_cover.png")
# ACNH = Game.create(title: "Animal Crossing: New Horizons", genre: "Life Sim", platform: "Nintendo Switch", image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Animal_Crossing_New_Horizons.jpg/220px-Animal_Crossing_New_Horizons.jpg")
# Hades = Game.create(title: "Hades", genre: "Action Roguelite", platform: "PS4/PS5, Xbox One/Series X, Switch, PC", image_url: "https://upload.wikimedia.org/wikipedia/en/c/cc/Hades_cover_art.jpg")

Smash = Game.create(title: "Super Smash Bros. Melee", genre: "Fighter", platform: "Nintendo GameCube", image_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co21yv.jpg")
BotW = Game.create(title: "The Legend of Zelda: Breath of the Wild", genre: "Action/Adventure", platform: "Nintendo Switch", image_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3p2d.jpg")
FF7 = Game.create(title: "Final Fantasy 7 Remake", genre: "JRPG", platform: "PS4/PS5", image_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1qxr.jpg")
Halo = Game.create(title: "Halo Infinite", genre: "FPS", platform: "Xbox One/Series X, PC", image_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2dto.jpg")
Crash = Game.create(title: "Crash Bandicoot N. Sane Trilogy", genre: "Platform", platform: "PS4, Xbox One, PC", image_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1v62.jpg")
Mario = Game.create(title: "Super Mario Odyssey", genre: "Platform", platform: "Nintendo Switch", image_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1mxf.jpg")
RE8 = Game.create(title: "Resident Evil Village", genre: "Survival Horror", platform: "PS4/PS5, Xbox One/Series X, PC", image_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2zpu.jpg")
TLOU2 = Game.create(title: "The Last of Us Part II", genre: "Action/Adventure", platform: "PS4", image_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1r0o.jpg")
ER = Game.create(title: "Elden Ring", genre: "Action RPG", platform: "PS4/PS5, Xbox One/Series X, PC", image_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.jpg")
Forza = Game.create(title: "Forza Horizon 5", genre: "Racing", platform: "Xbox One/Series X, PC", image_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3ofx.jpg")
SV = Game.create(title: "Stardew Valley", genre: "Farming Sim", platform: "PS4, Xbox One, Switch, PC, Mobile", image_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/xrpmydnu9rpxvxfjkiu7.jpg")
MC = Game.create(title: "Minecraft", genre: "Survival", platform: "PC", image_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co49x5.jpg")
ACNH = Game.create(title: "Animal Crossing: New Horizons", genre: "Life Sim", platform: "Nintendo Switch", image_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3wls.jpg")
Hades = Game.create(title: "Hades", genre: "Action Roguelite", platform: "PS4/PS5, Xbox One/Series X, Switch, PC", image_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co39vc.jpg")
AA = Game.create(title: "Antarctic Adventure", genre: "Arcade, Platform, Racing", platform: "ColecoVision, Wii, FAMICOM, MSX", image_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4kdp.jpg")
CS = Game.create(title: "Counter-Strike", genre: "Shooter", platform: "PC, Mac, Xbox, Linux", image_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3dav.jpg")
SC = Game.create(title: "StarCraft", genre: "Real Time Strategy", platform: "PC, Mac", image_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1x7n.jpg")
LOL = Game.create(title: "League of Legends", genre: "MOBA", platform: "PC, Mac", image_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co49wj.jpg")
WOW = Game.create(title: "World of Warcraft", genre: "Adventure, RPG", platform: "PC, Mac", image_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2l7z.jpg")
Ttrs = Game.create(title: "Tetris", genre: "Arcade, Puzzle, Strategy", platform: "NES", image_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2ufk.jpg")
Mario3 = Game.create(title: "Super Mario Bros. 3", genre: "Adventure, Platform", platform: "Wii U, Wii, Nintendo 3DS, NES, FAMICOM", image_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co23jw.jpg")
Sonic = Game.create(title: "Sonic the Hedgehog", genre: "Adventure, Platform", platform: "PC, Xbox, Sega, PS3, Wii", image_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1zun.jpg")
BM = Game.create(title: "beatmania", genre: "Music", platform: "Arcade", image_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2bz9.jpg")
DDR = Game.create(title: "Dance Dance Revolution", genre: "Music, Simulator", platform: "Arcade, PS", image_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2puf.jpg")
TR = Game.create(title: "Temple Run", genre: "Adventure, Arcade, Platform", platform: "iOS, Android", image_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2rk3.jpg")
Ninja = Game.create(title: "Fruit Ninja", genre: "Arcade, Platform", platform: "PC, Android, iOS, Xbox, PS Vita", image_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co554v.jpg")
Snake = Game.create(title: "Snake", genre: "Arcade", platform: "Android, iOS, Mobile", image_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co25so.jpg")
PoGo = Game.create(title: "Pokémon GO", genre: "Adventure, Simulator, Strategy", platform: "Android, iOS", image_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1zj7.jpg")
Fifa = Game.create(title: "FIFA 22", genre: "Simulator, Sport", platform: "PC, PS4/PS5, Xbox", image_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3dsm.jpg")
Win11 = Game.create(title: "World Soccer Winning Eleven 8 International", genre: "Sport", platform: "Xbox", image_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4hoo.jpg")

puts "seeding reviews"

User.all.size.times do |u|
    rand(10..20).times do |g|
       Review.create(content: Faker::Hipster.sentence, rating: rand(1..5), completed: [true, false].sample, user_id: User.all.sample.id, game_id: Game.all.sample.id)
    end
end

puts "seeding comments"

60.times do
    Comment.create(review_id: Review.all.sample.id, user_id: User.all.sample.id, comment_body: Faker::Company.bs)
end

puts "seeding likes"

80.times do
    Like.create(review_id: Review.all.sample.id, user_id: User.all.sample.id)
end

puts "done seeding!"
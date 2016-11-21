import graphlab as gl

url = "https://raw.githubusercontent.com/funnymanpatrick/BuzzedFeed/master/Drinks%20(1).csv"

db = gl.Sframe.read_csv(url)

model = gl.item_content_recommender.create(db, 'drink_id')

recs = model.recommend(k = 5)


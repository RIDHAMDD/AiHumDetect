import sys
import joblib
import string

# import nltk
# from nltk.tokenize import word_tokenize
# from nltk.stem import PorterStemmer
# from nltk.corpus import words


# Function to remove unwanted tags like newline and single quote
def remove_tags(text):
    tags = ["\n", "'"]
    for tag in tags:
        text = text.replace(tag, "")
    return text


# Function to remove punctuation
def remove_punc(text):
    new_text = [x for x in text if x not in string.punctuation]
    new_text = "".join(new_text)
    return new_text


# Function to correct text (stemming and checking for valid English words)
# def correct_text(text):
#     stemmer = PorterStemmer()
#     english_words = set(words.words())
#     list_text = word_tokenize(text.lower())
#     stemmed_words = [stemmer.stem(word) for word in list_text]
#     corrected_text = [word for word in stemmed_words if word in english_words]
#     return ' '.join(corrected_text)

# Load models based on input arguments
model_name = sys.argv[1]
content = sys.argv[2]

# Preprocess input text
cleaned_text = remove_tags(content)
cleaned_text = remove_punc(cleaned_text)
# cleaned_text = correct_text(cleaned_text)

# Load models
models = {
    "Multinomial Naive Bayes": "models/nb.pkl",
}

# Predict using the selected model
if model_name in models:
    # print("Printing model Path")
    # print(models[model_name])
    model = joblib.load(models[model_name])  # Using joblib instead of pickle
    prediction = model.predict([cleaned_text])
    if prediction[0] == 0.0:
        print("This is a Human text")
    else:
        print("This is a AI text")

else:
    print("Invalid Model")

function(doc) {
    if (doc.colorcodes){
        for each (var color in doc.colorcodes){
            emit(color.color_code, color);
        }
    }
}

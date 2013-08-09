function(doc) {
    if (doc.issuecodes){
        for each (var issue in doc.issuecodes){
            emit(issue.issue_code, issue);
        }
    }
}

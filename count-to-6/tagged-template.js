console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(template, ...theRest){
    var [username, comment] = theRest;
    username = username.replace( /&/g, "&amp;")
        .replace( /'/g, "&apos;")
        .replace( /"/g, "&quot;")
        .replace( /</g, "&lt;")
        .replace( />/g, "&gt;");

    comment = comment.replace( /&/g, "&amp;")
        .replace( /'/g, "&apos;")
        .replace( /"/g, "&quot;")
        .replace( /</g, "&lt;")
        .replace( />/g, "&gt;");

    return template[0] + username + template[1] + comment + template[2];
}

//refactor this
/* Made by Hullen Gonzales (twitter.com/hullen) */
var wpsql = function () {
    function setURLs(urls) {
      var el = document.getElementById("sqlfinal"),
          snpp = document.getElementById("response"),
          sqls = '',
          sqlsfinal = 'Sorry, you need enter the URLs!';
      if (urls.oldname !== '' && urls.newname !== '') {
        sqls = 'UPDATE wp_options SET option_value = replace(option_value, "' + urls.oldname + '", "' + urls.newname + '") WHERE option_name = "home" OR option_name = "siteurl";\n';
        sqls += 'UPDATE wp_posts SET guid = REPLACE (guid, "' + urls.oldname + '", "' + urls.newname + '");\n';
        sqls += 'UPDATE wp_posts SET post_content = REPLACE (post_content, "' + urls.oldname + '", "' + urls.newname + '");\n';
        sqls += 'UPDATE wp_postmeta SET meta_value = REPLACE (meta_value, "' + urls.oldname + '", "' + urls.newname + '");';
        sqlsfinal = sqls;
      }
        el.innerHTML = sqlsfinal;
        snpp.style.opacity = 1;
    }
    function getValue(f) {
      var urls = [],
        formE = document.forms[f];
      urls.oldname = formE['url-old'].value;
      urls.newname = formE['url-new'].value;
      setURLs(urls);
    }
    function setForm(e) {
      var f = e.name;
      getValue(f);
    }
    function publicSendForm(formE) {
      setForm(formE);
    }

    return { sendForm : publicSendForm };
  }();
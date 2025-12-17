
$files = Get-ChildItem -Path . -Filter *.html | Where-Object { $_.Name -ne 'index.html' -and $_.Name -ne 'ai_projects.html' -and $_.Name -ne 'about.html' }

foreach ($file in $files) {
    Write-Host "Processing $($file.Name)..."
    $content = Get-Content -Path $file.FullName -Raw -Encoding utf8
    
    # 1. Replace or Setup ABOUT link
    # Find existing ABOUT link which points to google doc or anything else.
    # We want <a ... href="./about.html">ABOUT</a>
    
    if ($content -match '(?si)(<a[^>]*href="[^"]*google\.com[^"]*"[^>]*>\s*ABOUT\s*</a>)') {
        Write-Host "  Found Google Doc ABOUT link. Replacing..."
        $content = $content -replace '(?si)<a[^>]*href="[^"]*google\.com[^"]*"[^>]*>\s*ABOUT\s*</a>', '<a class="header-gnblink" href="./about.html">ABOUT</a>'
        Write-Host "  Replaced ABOUT link."
    } elseif ($content -match '(?si)(<a[^>]*href="[^"]*about\.html"[^>]*>\s*ABOUT\s*</a>)') {
         Write-Host "  About link already correct."
    } else {
        # Fallback: Look for just ABOUT text in link if regex failed slightly
        if ($content -match 'ABOUT') {
             Write-Host "  Found ABOUT but not matching Google Doc pattern perfectly. Attempting generic replace."
             # Be careful not to replace title or other texts, target <a> tag context if possible
        }
    }
    
    # 2. Add or Update PROJECT WITH AI link
    # Check if "PROJECT WITH AI" or "PROJECT BY AI" exists
    if ($content -match "PROJECT WITH AI") {
        Write-Host "  Already has PROJECT WITH AI."
    } elseif ($content -match "PROJECT BY AI") {
        Write-Host "  Has PROJECT BY AI. Updating to WITH..."
        $content = $content.Replace("PROJECT BY AI", "PROJECT WITH AI")
    } else {
        # Need to insert it.
        # Find PROJECTS link location
        if ($content -match '(?si)(<li[^>]*>\s*<a[^>]*href=[^>]*>.*?PROJECTS.*?</a>\s*</li>)') {
            $foundBlock = $matches[1]
            Write-Host "  Found PROJECTS block. Inserting PROJECT WITH AI after it."
            
            # Create new block
            # Extract class from <li> if exists
            $liClass = ""
            if ($foundBlock -match '<li([^>]*)>') {
                $liClass = $matches[1]
            }
            
            # Construct new item using same class structure
            $newItem = "<li$liClass>`n" +
                       '    <a class="header-gnblink" href="./ai_projects.html">PROJECT WITH AI</a>' +
                       "`n</li>"
            
            # Add after found block
            $content = $content.Replace($foundBlock, "$foundBlock`n$newItem")
        }
    }

    Set-Content -Path $file.FullName -Value $content -Encoding utf8
}

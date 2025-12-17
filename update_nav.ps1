
$files = Get-ChildItem -Path . -Filter *.html | Where-Object { $_.Name -ne 'index.html' -and $_.Name -ne 'ai_projects.html' }

foreach ($file in $files) {
    Write-Host "Processing $($file.Name)..."
    $content = Get-Content -Path $file.FullName -Raw -Encoding utf8
    
    if ($content -match "PROJECT BY AI") {
        Write-Host "  Already has PROJECT BY AI. Skipping."
        continue
    }

    $updated = $false

    # Try to find PROJECTS item first
    # Regex explains: match <li>...</li> that contains PROJECTS. 
    # capturing the whole <li> block.
    # We allow class attributes on li.
    # distinct patterns for different file structures
    
    # Pattern 1: <li ...> ... <a ...> ... PROJECTS ... </a> ... </li>
    if ($content -match '(?si)(<li[^>]*>.*?<a[^>]*href=[^>]*>.*?PROJECTS.*?</a>.*?</li>)') {
        $foundBlock = $matches[1]
        Write-Host "  Found PROJECTS block."
        
        # Create new block
        $newBlock = $foundBlock -replace 'href="[^"]*"', 'href="./ai_projects.html"'
        $newBlock = $newBlock -replace 'PROJECTS', 'PROJECT BY AI'
        # Also fix case if it was PROJECTs
        $newBlock = $newBlock -replace 'PROJECTs', 'PROJECT BY AI'
        
        $content = $content.Replace($foundBlock, "$foundBlock`n$newBlock")
        $updated = $true
    }
    # Pattern 2: Fallback to ABOUT if PROJECTS not found
    elseif ($content -match '(?si)(<li[^>]*>.*?<a[^>]*href=[^>]*>.*?ABOUT.*?</a>.*?</li>)') {
        $foundBlock = $matches[1]
        Write-Host "  PROJECTS not found. Found ABOUT block."
        
        # Create new block
        $newBlock = $foundBlock -replace 'href="[^"]*"', 'href="./ai_projects.html"'
        $newBlock = $newBlock -replace 'ABOUT', 'PROJECT BY AI'
        $newBlock = $newBlock -replace 'target="_blank"', '' # Remove target blank for internal link
        
        $content = $content.Replace($foundBlock, "$foundBlock`n$newBlock")
        $updated = $true
    }

    if ($updated) {
        Set-Content -Path $file.FullName -Value $content -Encoding utf8
        Write-Host "  Updated."
    } else {
        Write-Host "  No suitable navigation block found."
    }
}

<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>楓グループ 管理ダッシュボード</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Noto+Sans+JP:wght@300;400;500&family=Shippori+Mincho:wght@500;600&display=swap" rel="stylesheet">
<style>
:root{
  --maple-red:#B8604A;--maple-deep:#8B3E2A;--maple-gold:#C8A45A;
  --navy:#1A2B4A;--navy2:#243558;
  --bg:#FAF6EF;--bg2:#F2EBE0;--bg3:#E8DDD0;
  --border:#D4C8B0;--border2:#C4B49A;
  --text:#2D1F0E;--text2:#6B5744;--text3:#9A8070;
  --white:#FFFFFF;
  --green:#4A7C59;--yellow:#B8860B;--red:#B8604A;
  --shadow:0 2px 16px rgba(45,31,14,0.10);
}
*{margin:0;padding:0;box-sizing:border-box}
body{background:var(--bg);color:var(--text);font-family:'Noto Sans JP',sans-serif;font-weight:300;min-height:100vh;font-size:14px}

/* ── LOGIN ── */
#loginWrap{display:flex;align-items:center;justify-content:center;min-height:100vh;padding:20px;background:var(--bg)}
.login-box{background:var(--white);border:1px solid var(--border);padding:56px 48px;width:100%;max-width:400px;box-shadow:var(--shadow)}
.login-logo{font-family:'Cormorant Garamond',serif;font-size:2rem;font-weight:500;color:var(--maple-red);text-align:center;margin-bottom:4px;letter-spacing:0.14em}
.login-logo span{font-size:1.2rem;color:var(--maple-gold);margin-right:6px}
.login-sub{font-size:0.72rem;color:var(--text3);text-align:center;letter-spacing:0.18em;margin-bottom:40px;font-family:'Shippori Mincho',serif}
.login-label{font-size:0.68rem;color:var(--text2);letter-spacing:0.12em;margin-bottom:6px;display:block;text-transform:uppercase}
.login-input{width:100%;padding:12px 16px;background:var(--bg);border:1px solid var(--border);color:var(--text);font-family:'Noto Sans JP',sans-serif;font-size:0.88rem;font-weight:300;outline:none;transition:border-color 0.2s;margin-bottom:20px}
.login-input:focus{border-color:var(--maple-red)}
.login-btn{width:100%;padding:13px;background:var(--maple-red);color:var(--white);border:none;cursor:pointer;font-family:'Noto Sans JP',sans-serif;font-size:0.86rem;font-weight:400;letter-spacing:0.14em;transition:background 0.2s}
.login-btn:hover{background:var(--maple-deep)}
.login-err{color:var(--red);font-size:0.74rem;margin-top:10px;text-align:center;display:none}

/* ── DASHBOARD ── */
#dashWrap{display:none;min-height:100vh;background:var(--bg)}
header{background:var(--white);border-bottom:1px solid var(--border);padding:0 40px;height:60px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 1px 8px rgba(45,31,14,0.06);position:sticky;top:0;z-index:100}
.hd-left{display:flex;align-items:center;gap:16px}
.hd-logo{font-family:'Cormorant Garamond',serif;font-size:1.4rem;font-weight:500;color:var(--maple-red);letter-spacing:0.12em}
.hd-logo span{color:var(--maple-gold);margin-right:4px}
.hd-badge{background:var(--maple-red);color:var(--white);font-size:0.60rem;padding:2px 10px;letter-spacing:0.14em;font-weight:500}
.hd-meta{font-size:0.72rem;color:var(--text3);font-family:'Cormorant Garamond',serif;letter-spacing:0.06em}
.logout-btn{background:none;border:1px solid var(--border2);color:var(--text2);padding:6px 18px;cursor:pointer;font-size:0.72rem;font-family:'Noto Sans JP',sans-serif;transition:all 0.2s;letter-spacing:0.08em}
.logout-btn:hover{border-color:var(--maple-red);color:var(--maple-red)}

/* ── NAV TABS ── */
.nav-tabs{background:var(--white);border-bottom:1px solid var(--border);display:flex;padding:0 40px;gap:0}
.nav-tab{padding:12px 24px;border:none;background:none;cursor:pointer;font-family:'Noto Sans JP',sans-serif;font-size:0.82rem;color:var(--text3);letter-spacing:0.06em;border-bottom:2px solid transparent;transition:.2s}
.nav-tab.active{color:var(--maple-red);border-bottom-color:var(--maple-red);font-weight:500}
.nav-tab:hover:not(.active){color:var(--text2)}

main{padding:36px 40px;max-width:1280px;margin:0 auto}
.page-panel{display:none}
.page-panel.active{display:block}

/* STATUS */
.status-bar{display:flex;align-items:center;gap:10px;margin-bottom:32px;padding:12px 20px;background:var(--white);border:1px solid var(--border);box-shadow:var(--shadow)}
.status-dot{width:8px;height:8px;border-radius:50%;background:var(--green);animation:pulse 2.4s ease-in-out infinite;flex-shrink:0}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}
.status-txt{font-size:0.78rem;color:var(--text2);letter-spacing:0.04em}
.status-lp{font-size:0.78rem;color:var(--maple-gold);margin-left:auto;font-family:'Cormorant Garamond',serif;letter-spacing:0.10em}

/* STATS */
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:32px}
.stat-card{background:var(--white);border:1px solid var(--border);padding:24px 22px;border-top:3px solid var(--maple-red);box-shadow:var(--shadow)}
.stat-lbl{font-size:0.70rem;color:var(--text3);letter-spacing:0.16em;margin-bottom:12px;text-transform:uppercase;font-weight:400}
.stat-val{font-family:'Cormorant Garamond',serif;font-size:3rem;font-weight:500;color:var(--maple-red);line-height:1}
.stat-sub{font-size:0.70rem;color:var(--text3);margin-top:8px;letter-spacing:0.08em}

/* SECTION TITLE */
.section-ttl{font-family:'Shippori Mincho',serif;font-size:0.76rem;font-weight:600;color:var(--text3);letter-spacing:0.18em;text-transform:uppercase;margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid var(--border)}

/* LP TABS */
.lp-tabs{display:flex;gap:8px;margin-bottom:20px;flex-wrap:wrap}
.lp-tab{padding:7px 18px;border:1px solid var(--border);background:none;color:var(--text3);font-family:'Noto Sans JP',sans-serif;font-size:0.76rem;letter-spacing:0.08em;cursor:pointer;transition:all .2s}
.lp-tab.active{background:var(--maple-red);border-color:var(--maple-red);color:#fff}
.lp-tab:hover:not(.active){border-color:var(--maple-red);color:var(--maple-red)}

/* LP CARD */
.lp-card{background:var(--white);border:1px solid var(--border);border-left:4px solid var(--maple-red);padding:22px 26px;margin-bottom:14px;box-shadow:var(--shadow)}
.lp-card-top{display:flex;align-items:center;gap:12px;margin-bottom:18px;flex-wrap:wrap}
.lp-card-label{font-family:'Shippori Mincho',serif;font-size:1.1rem;font-weight:600;color:var(--text)}
.lp-card-variant{font-size:0.68rem;color:var(--text3);margin-left:auto;letter-spacing:0.10em}
.lp-card-url{font-size:0.72rem;color:var(--maple-gold);text-decoration:none;letter-spacing:0.04em}
.lp-card-url:hover{text-decoration:underline}
.lp-metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.lp-metric{background:var(--bg2);padding:14px 16px;border:1px solid var(--border)}
.lp-metric-lbl{font-size:0.66rem;color:var(--text3);letter-spacing:0.12em;margin-bottom:6px;text-transform:uppercase}
.lp-metric-val{font-family:'Cormorant Garamond',serif;font-size:2rem;font-weight:500;color:var(--maple-red)}

/* CHART */
.chart-wrap{background:var(--white);border:1px solid var(--border);padding:28px;margin-bottom:32px;box-shadow:var(--shadow)}
.chart-area{height:200px;display:flex;align-items:flex-end;gap:12px}
.chart-bar-group{flex:1;display:flex;flex-direction:column;align-items:center;gap:6px}
.chart-bars{display:flex;gap:4px;align-items:flex-end;height:160px;width:100%}
.chart-bar{flex:1;min-height:2px;border-radius:2px 2px 0 0;transition:height 0.8s ease}
.chart-bar.pv{background:rgba(184,96,74,0.45)}
.chart-bar.diag{background:rgba(200,164,90,0.55)}
.chart-bar.book{background:rgba(74,124,89,0.55)}
.chart-label{font-size:0.64rem;color:var(--text3);text-align:center}
.chart-legend{display:flex;gap:20px;margin-top:14px}
.chart-legend-item{display:flex;align-items:center;gap:7px;font-size:0.70rem;color:var(--text2)}
.chart-legend-dot{width:12px;height:12px;border-radius:2px}

/* SCORE */
.score-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:32px}
.score-card{background:var(--white);border:1px solid var(--border);padding:22px 20px;text-align:center;box-shadow:var(--shadow)}
.score-card-lbl{font-size:0.68rem;color:var(--text3);letter-spacing:0.16em;margin-bottom:12px;text-transform:uppercase}
.score-card-val{font-family:'Cormorant Garamond',serif;font-size:2.6rem;font-weight:500}
.score-card-val.a{color:var(--green)}.score-card-val.b{color:var(--yellow)}.score-card-val.c{color:var(--red)}

/* FEED */
.feed-wrap{background:var(--white);border:1px solid var(--border);padding:24px;margin-bottom:32px;max-height:340px;overflow-y:auto;box-shadow:var(--shadow)}
.feed-item{display:flex;align-items:flex-start;gap:14px;padding:12px 0;border-bottom:1px solid var(--border)}
.feed-item:last-child{border-bottom:none}
.feed-icon{font-size:1.2rem;flex-shrink:0;margin-top:1px}
.feed-body{flex:1}
.feed-ev{font-size:0.82rem;color:var(--text);font-weight:400;letter-spacing:0.02em}
.feed-meta{font-size:0.70rem;color:var(--text3);margin-top:3px;letter-spacing:0.04em}
.feed-empty{font-size:0.78rem;color:var(--text3);text-align:center;padding:24px 0;letter-spacing:0.06em}

/* BLOG EDITOR */
.editor-card{background:var(--white);border:1px solid var(--border);padding:28px;margin-bottom:20px;box-shadow:var(--shadow)}
.editor-ttl{font-family:'Shippori Mincho',serif;font-size:0.90rem;font-weight:600;color:var(--text);margin-bottom:18px}
.form-group{margin-bottom:14px}
.form-label{font-size:0.70rem;color:var(--text2);letter-spacing:0.10em;margin-bottom:5px;display:block;text-transform:uppercase}
.form-input,.form-select,.form-textarea{width:100%;padding:10px 14px;background:var(--bg);border:1px solid var(--border);color:var(--text);font-family:'Noto Sans JP',sans-serif;font-size:0.88rem;font-weight:300;outline:none;transition:border-color .2s}
.form-input:focus,.form-select:focus,.form-textarea:focus{border-color:var(--maple-red)}
.form-textarea{min-height:160px;resize:vertical;line-height:1.85}
.btn-publish{background:var(--maple-red);color:var(--white);border:none;padding:11px 28px;cursor:pointer;font-family:'Noto Sans JP',sans-serif;font-size:0.82rem;letter-spacing:0.12em;transition:background .2s}
.btn-publish:hover{background:var(--maple-deep)}
.btn-sub{background:none;border:1px solid var(--border2);color:var(--text2);padding:10px 20px;cursor:pointer;font-family:'Noto Sans JP',sans-serif;font-size:0.82rem;transition:all .2s;margin-left:8px}
.btn-sub:hover{border-color:var(--maple-red);color:var(--maple-red)}
.btn-danger{background:none;border:1px solid var(--red);color:var(--red);padding:4px 12px;cursor:pointer;font-size:0.72rem;font-family:'Noto Sans JP',sans-serif;transition:all .2s}
.btn-danger:hover{background:var(--red);color:var(--white)}
.btn-refresh{background:none;border:1px solid var(--border);color:var(--text2);padding:6px 16px;cursor:pointer;font-size:0.72rem;font-family:'Noto Sans JP',sans-serif;transition:.2s;letter-spacing:0.06em}
.btn-refresh:hover{border-color:var(--maple-red);color:var(--maple-red)}

/* TABLE */
.table-card{background:var(--white);border:1px solid var(--border);box-shadow:var(--shadow);margin-bottom:20px;overflow:hidden}
.table-card-hd{padding:14px 22px;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center}
.table-card-ttl{font-size:0.82rem;font-weight:500;color:var(--text)}
.tbl-wrap{overflow-x:auto}
table{width:100%;border-collapse:collapse}
th{background:var(--bg2);padding:9px 16px;font-size:0.68rem;font-weight:500;color:var(--text2);text-align:left;white-space:nowrap;border-bottom:1px solid var(--border);letter-spacing:0.08em;text-transform:uppercase}
td{padding:10px 16px;font-size:0.82rem;color:var(--text2);border-bottom:1px solid var(--border)}
tr:last-child td{border:none}
tr:hover td{background:var(--bg)}

/* TOAST */
#toast{position:fixed;bottom:24px;right:24px;background:var(--maple-deep);color:var(--white);padding:12px 22px;font-size:0.82rem;box-shadow:var(--shadow);opacity:0;transition:.3s;pointer-events:none;z-index:999;letter-spacing:0.04em}
#toast.show{opacity:1}

.loading-txt{text-align:center;padding:32px;color:var(--text3);font-size:0.82rem;letter-spacing:0.06em}

@media(max-width:768px){
  .stats-grid{grid-template-columns:repeat(2,1fr)}
  .lp-metrics{grid-template-columns:repeat(2,1fr)}
  .score-grid{grid-template-columns:1fr}
  main{padding:20px 16px}
  header{padding:0 16px}
  .nav-tabs{padding:0 16px}
}
</style>
</head>
<body>

<!-- LOGIN -->
<div id="loginWrap">
  <div class="login-box">
    <div class="login-logo"><span>🍁</span>楓グループ</div>
    <div class="login-sub">管理ダッシュボード</div>
    <label class="login-label">パスワード</label>
    <input type="password" id="pwInput" class="login-input" placeholder="••••••••" onkeydown="if(event.key==='Enter')doLogin()">
    <button class="login-btn" onclick="doLogin()">ログイン</button>
    <p class="login-err" id="loginErr">パスワードが正しくありません</p>
  </div>
</div>

<!-- DASHBOARD -->
<div id="dashWrap">
  <header>
    <div class="hd-left">
      <span class="hd-logo"><span>🍁</span>楓グループ</span>
      <span class="hd-badge">ADMIN</span>
    </div>
    <span class="hd-meta" id="hdMeta"></span>
    <button class="logout-btn" onclick="doLogout()">ログアウト</button>
  </header>

  <div class="nav-tabs">
    <button class="nav-tab active" id="nav-analytics" onclick="showTab('analytics')">📊 アクセス解析</button>
    <button class="nav-tab" id="nav-recruit"   onclick="showTab('recruit')">👥 採用申し込み</button>
    <button class="nav-tab" id="nav-blog"      onclick="showTab('blog')">✏️ ブログ管理</button>
  </div>

  <main>

    <!-- ── ANALYTICS ── -->
    <div class="page-panel active" id="page-analytics">
      <div class="status-bar">
        <div class="status-dot"></div>
        <span class="status-txt" id="statusTxt">Amplitude に接続中…</span>
        <span class="status-lp" id="statusLp">LP: kaede-v1　main.kaedesalon.shop</span>
      </div>

      <!-- 全LP合算（今月） -->
      <div class="section-ttl">Summary — All LPs（今月）</div>
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-lbl">ページビュー（今月）</div>
          <div class="stat-val" id="sPV">—</div>
          <div class="stat-sub">page_view</div>
        </div>
        <div class="stat-card">
          <div class="stat-lbl">AI診断 開始</div>
          <div class="stat-val" id="sDiag">—</div>
          <div class="stat-sub">diagnosis_click</div>
        </div>
        <div class="stat-card">
          <div class="stat-lbl">予約完了</div>
          <div class="stat-val" id="sBook">—</div>
          <div class="stat-sub">booking_complete</div>
        </div>
        <div class="stat-card">
          <div class="stat-lbl">診断転換率</div>
          <div class="stat-val" id="sRate">—</div>
          <div class="stat-sub">診断÷PV</div>
        </div>
      </div>

      <!-- LP個別モニター -->
      <div class="section-ttl" style="margin-top:8px">LP Monitor</div>
      <div class="lp-tabs">
        <button class="lp-tab active" id="tab-kaede-v1"      onclick="switchLP('kaede-v1')">main.kaedesalon.shop</button>
        <button class="lp-tab"        id="tab-kaede-v2"      onclick="switchLP('kaede-v2')">mainlp1.kaedesalon.shop</button>
        <button class="lp-tab"        id="tab-kaede-lp2"     onclick="switchLP('kaede-lp2')">mainlp2.kaedesalon.shop</button>
        <button class="lp-tab"        id="tab-kaede-recruit-v1" onclick="switchLP('kaede-recruit-v1')">採用LP（corp）</button>
      </div>
      <div class="lp-card">
        <div class="lp-card-top">
          <span style="width:4px;height:22px;background:var(--maple-red);display:inline-block;border-radius:2px;flex-shrink:0"></span>
          <span class="lp-card-label" id="lpCardLabel">salon楓 メンズ脱毛LP</span>
          <span class="lp-card-variant" id="lpCardVariant">v1（稼働中）</span>
          <a href="https://main.kaedesalon.shop" target="_blank" class="lp-card-url" id="lpCardUrl">main.kaedesalon.shop ↗</a>
        </div>
        <div class="lp-metrics">
          <div class="lp-metric"><div class="lp-metric-lbl">PV（今月）</div><div class="lp-metric-val" id="lpPV">—</div></div>
          <div class="lp-metric"><div class="lp-metric-lbl">診断数</div><div class="lp-metric-val" id="lpDiag">—</div></div>
          <div class="lp-metric"><div class="lp-metric-lbl">予約数</div><div class="lp-metric-val" id="lpBook">—</div></div>
          <div class="lp-metric"><div class="lp-metric-lbl">予約転換率</div><div class="lp-metric-val" id="lpConv">—</div></div>
        </div>
      </div>

      <!-- 週別トレンド -->
      <div class="section-ttl" style="margin-top:32px">週別トレンド（過去5週）</div>
      <div class="chart-wrap">
        <div class="chart-area" id="chartArea"><div class="loading-txt">読込中…</div></div>
        <div class="chart-legend">
          <div class="chart-legend-item"><div class="chart-legend-dot" style="background:rgba(184,96,74,0.45)"></div>PV</div>
          <div class="chart-legend-item"><div class="chart-legend-dot" style="background:rgba(200,164,90,0.55)"></div>診断</div>
          <div class="chart-legend-item"><div class="chart-legend-dot" style="background:rgba(74,124,89,0.55)"></div>予約</div>
        </div>
      </div>

      <!-- スコア分布 -->
      <div class="section-ttl">スコア分布（全期間）</div>
      <div class="score-grid">
        <div class="score-card"><div class="score-card-lbl">Level A（85点以上）</div><div class="score-card-val a" id="scA">—</div></div>
        <div class="score-card"><div class="score-card-lbl">Level B（70〜84点）</div><div class="score-card-val b" id="scB">—</div></div>
        <div class="score-card"><div class="score-card-lbl">Level C（69点以下）</div><div class="score-card-val c" id="scC">—</div></div>
      </div>

      <!-- アクティビティフィード -->
      <div class="section-ttl">アクティビティ フィード（過去4時間）</div>
      <div class="feed-wrap" id="feedWrap">
        <div class="feed-empty">読み込み中…</div>
      </div>

      <div style="text-align:right;margin-top:-16px;margin-bottom:32px">
        <button class="btn-refresh" onclick="initDash()">↻ 手動更新</button>
      </div>
    </div>

    <!-- ── RECRUIT ── -->
    <div class="page-panel" id="page-recruit">
      <div class="table-card">
        <div class="table-card-hd">
          <div class="table-card-ttl">採用問い合わせ一覧</div>
          <button class="btn-refresh" onclick="loadRecruitNote()">↻ 更新</button>
        </div>
        <div class="tbl-wrap">
          <table>
            <thead><tr><th>送信日時</th><th>お名前</th><th>携帯</th><th>メール</th><th>面談希望日</th><th>ポジション</th><th>Lv</th></tr></thead>
            <tbody id="recruit-tbody">
              <tr><td colspan="7" class="loading-txt">「更新」を押してください</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div style="font-size:0.72rem;color:var(--text3)">
        ※ 完全データは
        <a href="https://docs.google.com/spreadsheets/d/1WZZKJrT06I7nYQPm5UMhW-0IJVfiqk-hNbiGs9SAD3s"
           target="_blank" style="color:var(--maple-gold)">Googleスプレッドシート（採用問い合わせ シート）</a>
        でご確認ください。
      </div>
    </div>

    <!-- ── BLOG ── -->
    <div class="page-panel" id="page-blog">
      <div class="editor-card">
        <div class="editor-ttl">新規記事を投稿</div>
        <div class="form-group">
          <label class="form-label">カテゴリ</label>
          <select class="form-select" id="blog-cat">
            <option value="オーナーより">オーナーより</option>
            <option value="スタッフより">スタッフより</option>
            <option value="お知らせ">お知らせ</option>
            <option value="つぶやき">つぶやき</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">タイトル</label>
          <input class="form-input" id="blog-title" type="text" placeholder="記事のタイトルを入力">
        </div>
        <div class="form-group">
          <label class="form-label">本文（テキストのみ・コピペOK）</label>
          <textarea class="form-textarea" id="blog-body" placeholder="ここにテキストを貼り付けてください。HTMLは不要です。"></textarea>
        </div>
        <div style="display:flex;align-items:center">
          <button class="btn-publish" onclick="publishPost()">公開する</button>
          <button class="btn-sub" onclick="clearEditor()">クリア</button>
          <span id="pub-status" style="font-size:0.72rem;color:var(--text3);margin-left:14px"></span>
        </div>
      </div>
      <div class="table-card">
        <div class="table-card-hd">
          <div class="table-card-ttl">投稿済み記事一覧</div>
          <button class="btn-refresh" onclick="loadBlogPosts()">↻ 更新</button>
        </div>
        <div class="tbl-wrap">
          <table>
            <thead><tr><th>投稿日時</th><th>カテゴリ</th><th>タイトル</th><th>本文（抜粋）</th><th>操作</th></tr></thead>
            <tbody id="blog-tbody">
              <tr><td colspan="5" class="loading-txt">「更新」を押してください</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </main>
</div>

<div id="toast"></div>

<script>
// ── 定数 ──────────────────────────────────────────────
const ADMIN_PW = 'kaede2026';

// LP定義（原本 LP_LIST に採用LP追加）
const LP_LIST = {
  'kaede-v1': {
    label:'salon楓 メンズ脱毛 Main', variant:'v1（稼働中）',
    url:'https://main.kaedesalon.shop', urlLabel:'main.kaedesalon.shop ↗'
  },
  'kaede-v2': {
    label:'salon楓 mainlp1', variant:'v2（稼働中）',
    url:'https://mainlp1.kaedesalon.shop', urlLabel:'mainlp1.kaedesalon.shop ↗'
  },
  'kaede-lp2': {
    label:'salon楓 LP2（Path-Flow）', variant:'v3.2（稼働中）',
    url:'https://mainlp2.kaedesalon.shop', urlLabel:'mainlp2.kaedesalon.shop ↗'
  },
  'kaede-recruit-v1': {
    label:'楓グループ 採用LP（corp）', variant:'v1（稼働中）',
    url:'https://kaede-dusky.vercel.app', urlLabel:'kaede-dusky.vercel.app ↗'
  }
};

let CURRENT_LP = 'kaede-v1';

// ── 認証（sessionStorage永続化） ─────────────────────
function doLogin(){
  if(document.getElementById('pwInput').value === ADMIN_PW){
    sessionStorage.setItem('kaede_admin','1');
    document.getElementById('loginWrap').style.display='none';
    document.getElementById('dashWrap').style.display='block';
    initDash();
    setInterval(initDash, 30 * 60 * 1000); // 30分自動更新
  } else {
    document.getElementById('loginErr').style.display='block';
  }
}
function doLogout(){
  sessionStorage.removeItem('kaede_admin');
  location.reload();
}
// ページ読み込み時にセッション復元
if(sessionStorage.getItem('kaede_admin')==='1'){
  document.getElementById('loginWrap').style.display='none';
  document.getElementById('dashWrap').style.display='block';
  initDash();
  setInterval(initDash, 30 * 60 * 1000);
}

// ── タブ切替 ─────────────────────────────────────────
function showTab(tab){
  document.querySelectorAll('.page-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t=>t.classList.remove('active'));
  document.getElementById('page-'+tab).classList.add('active');
  document.getElementById('nav-'+tab).classList.add('active');
  if(tab==='blog')    loadBlogPosts();
  if(tab==='recruit') loadRecruitNote();
}

// ── LP切替 ───────────────────────────────────────────
function switchLP(id){
  CURRENT_LP = id;
  Object.keys(LP_LIST).forEach(k=>{
    const t = document.getElementById('tab-'+k);
    if(t) t.classList.toggle('active', k===id);
  });
  const lp = LP_LIST[id];
  document.getElementById('lpCardLabel').textContent   = lp.label;
  document.getElementById('lpCardVariant').textContent = lp.variant;
  const urlEl = document.getElementById('lpCardUrl');
  urlEl.textContent = lp.urlLabel;
  urlEl.href        = lp.url;
  document.getElementById('statusLp').textContent = 'LP: '+id+'　'+lp.url.replace('https://','');
  loadLP(id);
}

// ── Amplitude POST 呼び出し ──────────────────────────
async function ampPost(body){
  try{
    const r = await fetch('/api/amplitude-feed',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(body)
    });
    if(!r.ok) return null;
    return await r.json();
  } catch(e){ return null; }
}

// ── 今月の start/end ─────────────────────────────────
function monthRange(){
  const now=new Date();
  const start=new Date(now.getFullYear(),now.getMonth(),1).toISOString().slice(0,10).replace(/-/g,'');
  const end  =now.toISOString().slice(0,10).replace(/-/g,'');
  return {start,end};
}

// ── メインダッシュボード初期化 ───────────────────────
async function initDash(){
  const now=new Date();
  document.getElementById('hdMeta').textContent=now.toLocaleString('ja-JP');
  document.getElementById('statusTxt').textContent='Amplitude からデータ取得中…';

  const {start,end}=monthRange();

  // 全LP合算（今月）
  const allData=await ampPost({lp:'ALL',start,end,events:['page_view','diagnosis_click','booking_complete']});
  if(allData&&allData.counts){
    const pv   = allData.counts.page_view       || 0;
    const diag = allData.counts.diagnosis_click  || 0;
    const book = allData.counts.booking_complete || 0;
    const rate = pv>0 ? (diag/pv*100).toFixed(1)+'%' : '—';
    document.getElementById('sPV').textContent   = pv.toLocaleString();
    document.getElementById('sDiag').textContent = diag.toLocaleString();
    document.getElementById('sBook').textContent = book.toLocaleString();
    document.getElementById('sRate').textContent = rate;
    document.getElementById('statusTxt').textContent='Amplitude 接続済み — データ取得完了';
  } else {
    document.getElementById('statusTxt').textContent='Amplitude 接続待機中';
  }

  // LP個別
  await loadLP(CURRENT_LP);
}

async function loadLP(id){
  const {start,end}=monthRange();

  // 個別カウント
  const lpData=await ampPost({lp:id,start,end,events:['page_view','diagnosis_click','booking_complete']});
  if(lpData&&lpData.counts){
    const pv   = lpData.counts.page_view       || 0;
    const diag = lpData.counts.diagnosis_click  || 0;
    const book = lpData.counts.booking_complete || 0;
    document.getElementById('lpPV').textContent   = pv.toLocaleString();
    document.getElementById('lpDiag').textContent = diag.toLocaleString();
    document.getElementById('lpBook').textContent = book.toLocaleString();
    document.getElementById('lpConv').textContent = diag>0?(book/diag*100).toFixed(1)+'%':'—';
  }

  // スコア分布
  const sd=await ampPost({lp:id,query:'score_distribution'});
  if(sd&&sd.distribution){
    document.getElementById('scA').textContent=(sd.distribution.A||0)+'件';
    document.getElementById('scB').textContent=(sd.distribution.B||0)+'件';
    document.getElementById('scC').textContent=(sd.distribution.C||0)+'件';
  }

  // 週別トレンド
  const td=await ampPost({lp:id,query:'weekly_trend'});
  renderChart(td?td.trend:null);

  // アクティビティフィード
  const fd=await ampPost({lp:id,query:'activity_feed',hours:4,limit:20});
  renderFeed(fd?fd.events:null);
}

// ── チャート描画 ─────────────────────────────────────
function renderChart(trend){
  const area=document.getElementById('chartArea');
  area.innerHTML='';
  const weeks=trend&&trend.length===5?trend:[
    {label:'4週前',counts:{}},{label:'3週前',counts:{}},{label:'2週前',counts:{}},
    {label:'先週',counts:{}},{label:'今週',counts:{}}
  ];
  const maxPV=Math.max(...weeks.map(w=>w.counts.page_view||0),1);
  const CHART_H=160;
  weeks.forEach(w=>{
    const grp=document.createElement('div');grp.className='chart-bar-group';
    const bars=document.createElement('div');bars.className='chart-bars';
    const pv  =w.counts.page_view       ||0;
    const diag=w.counts.diagnosis_click  ||0;
    const book=w.counts.booking_complete ||0;
    [{cls:'pv',val:pv},{cls:'diag',val:diag},{cls:'book',val:book}].forEach(({cls,val})=>{
      const b=document.createElement('div');b.className='chart-bar '+cls;
      b.style.height=Math.max(2,Math.round(val/maxPV*CHART_H))+'px';
      b.title=cls+': '+val;
      bars.appendChild(b);
    });
    const lbl=document.createElement('div');lbl.className='chart-label';lbl.textContent=w.label;
    grp.appendChild(bars);grp.appendChild(lbl);area.appendChild(grp);
  });
}

// ── アクティビティフィード描画 ───────────────────────
const FEED_ICONS ={page_view:'👁',diagnosis_click:'🔬',booking_complete:'✅'};
const FEED_LABELS={page_view:'ページビュー',diagnosis_click:'AI診断 開始',booking_complete:'予約完了'};

function renderFeed(events){
  const wrap=document.getElementById('feedWrap');
  if(!events||events.length===0){
    wrap.innerHTML='<div class="feed-empty">過去4時間のアクティビティはありません</div>';
    return;
  }
  wrap.innerHTML='';
  events.forEach(ev=>{
    const item=document.createElement('div');item.className='feed-item';
    item.innerHTML=`<span class="feed-icon">${FEED_ICONS[ev.event]||'📌'}</span>
      <div class="feed-body">
        <div class="feed-ev">${FEED_LABELS[ev.event]||esc(ev.event)}</div>
        <div class="feed-meta">${esc(ev.time||'')} &nbsp;·&nbsp; ${esc(ev.lp||CURRENT_LP)}</div>
      </div>`;
    wrap.appendChild(item);
  });
}

// ── 採用タブ ─────────────────────────────────────────
function loadRecruitNote(){
  document.getElementById('recruit-tbody').innerHTML=`
    <tr><td colspan="7" style="padding:24px;text-align:center;color:var(--text3)">
      採用申し込みの詳細データは
      <a href="https://docs.google.com/spreadsheets/d/1WZZKJrT06I7nYQPm5UMhW-0IJVfiqk-hNbiGs9SAD3s"
         target="_blank" style="color:var(--maple-gold)">Googleスプレッドシート（採用問い合わせ シート）</a>
      でご確認ください。
    </td></tr>`;
}

// ── ブログ管理 ────────────────────────────────────────
async function loadBlogPosts(){
  const tbody=document.getElementById('blog-tbody');
  tbody.innerHTML='<tr><td colspan="5" class="loading-txt">読込中…</td></tr>';
  try{
    const r=await fetch('/api/save-blog');
    const d=await r.json();
    const posts=d.posts||[];
    if(!posts.length){
      tbody.innerHTML='<tr><td colspan="5" class="loading-txt">投稿はまだありません</td></tr>';
      return;
    }
    tbody.innerHTML=posts.map(p=>`
      <tr>
        <td style="white-space:nowrap">${esc(p.datetime)}</td>
        <td>${esc(p.category)}</td>
        <td style="font-weight:500">${esc(p.title)}</td>
        <td style="max-width:260px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(p.body.slice(0,80))}${p.body.length>80?'…':''}</td>
        <td><button class="btn-danger" onclick="deletePost('${esc(p.id)}')">削除</button></td>
      </tr>`).join('');
  } catch(e){
    tbody.innerHTML='<tr><td colspan="5" class="loading-txt">取得エラー</td></tr>';
  }
}

async function publishPost(){
  const cat  =document.getElementById('blog-cat').value;
  const title=document.getElementById('blog-title').value.trim();
  const body =document.getElementById('blog-body').value.trim();
  if(!title||!body){toast('タイトルと本文は必須です。',true);return;}
  document.getElementById('pub-status').textContent='送信中…';
  try{
    const r=await fetch('/api/save-blog',{
      method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({category:cat,title,body})
    });
    const d=await r.json();
    if(d.ok){toast('公開しました！');clearEditor();loadBlogPosts();}
    else toast('エラーが発生しました。',true);
  } catch(e){toast('通信エラー。',true);}
  document.getElementById('pub-status').textContent='';
}

async function deletePost(id){
  if(!confirm('この記事を削除しますか？'))return;
  try{
    const r=await fetch('/api/save-blog',{
      method:'DELETE',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({id})
    });
    const d=await r.json();
    if(d.ok){toast('削除しました。');loadBlogPosts();}
    else toast('削除エラー。',true);
  } catch(e){toast('通信エラー。',true);}
}

function clearEditor(){
  document.getElementById('blog-title').value='';
  document.getElementById('blog-body').value='';
}

// ── ユーティリティ ────────────────────────────────────
function esc(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function toast(msg,isErr){
  const el=document.getElementById('toast');
  el.textContent=msg;
  el.style.background=isErr?'#8B3E2A':'#1A2B4A';
  el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'),3000);
}
</script>
</body>
</html>

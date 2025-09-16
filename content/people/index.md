---
title: People
date: 2022-10-24

type: landing

sections:
  - block: people
    content:
      title: Meet the Team
      # Choose which groups/teams of users to display.
      #   Edit `user_groups` in each user's profile to add them to one or more of these groups.
      user_groups:
          - Director
          - Postdocs
          - PhD Students
          - PhD Students Under Joint Supervision
          - MS Students
          - Alumni
      sort_by: Params.last_name
      text: |
        <br>
        
        **GraphME** (<span style="color:#8A2BE2">**Graph** **M**</span>achine Learning and Intelligent <span style="color:#8A2BE2"> **E**</span>ducation) Lab at Zhejiang Normal University focuses on research in machine learning on graphs, graph neural networks, hypergraph/graph learning, intelligent education technologies, and their applications, etc. As a leading lab in the field, we are committed to advancing both the theory and practical applications of graph machine learning and intelligent education through innovative projects, publications, and collaborations.
      sort_ascending: true
    design:
      show_interests: false
      show_role: true
      show_social: true
      
  - block: collection
    content:
      title: Alumni
      subtitle: Our Former Members
      count: 1
    design:
      view: card
      columns: '4'
      card:
        size: small   # 小卡片
        show_name: false
        show_position: false
        show_link: false
---
